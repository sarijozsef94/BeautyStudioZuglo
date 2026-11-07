<?php

namespace BeautyStudio\Contact;

const MAX_BODY_BYTES = 24000;
const ALLOWED_ORIGINS = ['https://beautystudiozuglo.hu', 'https://www.beautystudiozuglo.hu'];
const SENDER = 'alexandrakohari@beautystudiozuglo.hu';
const RECIPIENT = 'alexandrakohari@beautystudiozuglo.hu';
const BACKUP_RECIPIENT = 'info@beautystudiozuglo.hu';

function result($status, $message, $errors = array()) {
    $body = ['ok' => $status === 200, 'message' => $message];
    if ($errors) $body['errors'] = $errors;
    return ['status' => $status, 'body' => $body];
}

function validOrigin($origin, $local = false) {
    if (in_array($origin, ALLOWED_ORIGINS, true)) return true;
    return $local && (bool) preg_match('~^http://(localhost|127\.0\.0\.1)(:[0-9]{1,5})?$~D', $origin);
}

function field($data, $key, $max, $required = false, $multiline = false) {
    $value = isset($data[$key]) ? $data[$key] : '';
    if (!is_string($value) || !preg_match('//u', $value)) {
        throw new \InvalidArgumentException('Invalid field: ' . $key);
    }

    $value = trim(str_replace(["\r\n", "\r"], "\n", $value));
    if (($required && $value === '') || preg_match_all('/./us', $value) > $max ||
        preg_match($multiline ? '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/' : '/[\x00-\x1F\x7F]/', $value)) {
        throw new \InvalidArgumentException('Invalid field content or length.');
    }

    return $value;
}

function reserveAttempt($directory, $ip, $now) {
    if (!is_dir($directory) && !@mkdir($directory, 0700, true) && !is_dir($directory)) {
        throw new \RuntimeException('Rate-limit storage unavailable.');
    }

    $file = @fopen($directory . '/limits.json', 'c+');
    if (!$file) throw new \RuntimeException('Rate-limit storage unavailable.');

    try {
        if (!flock($file, LOCK_EX)) throw new \RuntimeException('Rate-limit lock unavailable.');
        $raw = stream_get_contents($file);
        if ($raw === '') {
            if (function_exists('random_bytes')) {
                $secret = bin2hex(random_bytes(32));
            } elseif (function_exists('openssl_random_pseudo_bytes')) {
                $secret = bin2hex(openssl_random_pseudo_bytes(32));
            } else {
                throw new \RuntimeException('Secure random source unavailable.');
            }
            $state = ['secret' => $secret, 'ips' => [], 'global' => []];
        } else {
            $state = json_decode($raw, true, 32);
            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \RuntimeException('Invalid rate-limit state.');
            }
        }
        if (!is_array($state) || !isset($state['secret'], $state['ips'], $state['global'])) {
            throw new \RuntimeException('Invalid rate-limit state.');
        }

        foreach ($state['ips'] as $key => $times) {
            $state['ips'][$key] = array_values(array_filter($times, static function ($time) use ($now) {
                return $time > $now - 3600;
            }));
            if (!$state['ips'][$key]) unset($state['ips'][$key]);
        }
        $state['global'] = array_values(array_filter($state['global'], static function ($time) use ($now) {
            return $time > $now - 3600;
        }));

        $key = hash_hmac('sha256', $ip, $state['secret']);
        $times = isset($state['ips'][$key]) ? $state['ips'][$key] : [];
        if (count($times) >= 5 || count($state['global']) >= 50) return false;

        $state['ips'][$key][] = $now;
        $state['global'][] = $now;
        $json = json_encode($state);
        if ($json === false) throw new \RuntimeException('Rate-limit state encoding failed.');
        rewind($file);
        if (!ftruncate($file, 0) || fwrite($file, $json) !== strlen($json) || !fflush($file)) {
            throw new \RuntimeException('Rate-limit write failed.');
        }
        @chmod($directory . '/limits.json', 0600);
        return true;
    } finally {
        flock($file, LOCK_UN);
        fclose($file);
    }
}

function deliverMail($recipient, $subject, $body, $headers) {
    if (!function_exists('mail')) {
        throw new \RuntimeException('PHP mail() is unavailable or disabled.');
    }
    if (PHP_SAPI === 'cli' || PHP_SAPI === 'cli-server') return false;
    return mail($recipient, $subject, $body, $headers, '-f ' . SENDER);
}

function unavailable($error) {
    // Keep diagnostics in the server log, without recording form values or stack arguments.
    error_log('Beauty Studio contact: ' . get_class($error) . ' at '
        . basename($error->getFile()) . ':' . $error->getLine());
    return result(503, 'A küldés átmenetileg nem érhető el. Kérjük, írjon közvetlenül az alexandrakohari@beautystudiozuglo.hu címre vagy hívjon minket.');
}

function handle($server, $raw, $storage, $send, $local = false, $now = null) {
    if ((isset($server['REQUEST_METHOD']) ? $server['REQUEST_METHOD'] : '') !== 'POST') {
        return result(405, 'Az űrlapot a Küldés gombbal küldje el.');
    }
    if (!validOrigin(isset($server['HTTP_ORIGIN']) ? $server['HTTP_ORIGIN'] : '', $local)) {
        return result(403, 'A kérést a weboldal kapcsolatfelvételi űrlapjáról indítsa.');
    }
    $contentType = isset($server['CONTENT_TYPE']) ? $server['CONTENT_TYPE'] : '';
    if (strtolower(trim(explode(';', $contentType)[0])) !== 'application/json') {
        return result(415, 'Nem támogatott kérésformátum.');
    }
    if (strlen($raw) > MAX_BODY_BYTES || (int) (isset($server['CONTENT_LENGTH']) ? $server['CONTENT_LENGTH'] : 0) > MAX_BODY_BYTES) {
        return result(413, 'Az üzenet túl hosszú.');
    }

    try {
        $data = json_decode($raw, true, 16);
        if (json_last_error() !== JSON_ERROR_NONE || !is_array($data) || !$data ||
            (count($data) > 0 && array_keys($data) === range(0, count($data) - 1))) {
            return result(400, 'Érvénytelen űrlapadatok.');
        }
        if (field($data, 'website', 200) !== '') return result(422, 'Az űrlapot nem sikerült feldolgozni.');

        $name = field($data, 'name', 120, true);
        $email = field($data, 'email', 254, true);
        $phone = field($data, 'phone', 40);
        $service = field($data, 'service', 160);
        $message = field($data, 'message', 5000, true, true);
        $privacy = field($data, 'privacy', 16, true);

        $errors = [];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Kérjük, érvényes e-mail címet adjon meg.';
        if ($privacy !== 'accepted') $errors['privacy'] = 'Az adatvédelmi tájékoztató elfogadása kötelező.';
        if ($errors) return result(422, 'Kérjük, ellenőrizze az űrlap mezőit.', $errors);
    } catch (\InvalidArgumentException $error) {
        return result(422, 'Kérjük, ellenőrizze a kötelező mezőket és a megadott adatok hosszát.');
    }

    try {
        $remoteIp = isset($server['REMOTE_ADDR']) ? $server['REMOTE_ADDR'] : 'unknown';
        if (!reserveAttempt($storage, $remoteIp, $now === null ? time() : $now)) {
            return result(429, 'Túl sok küldési kísérlet történt. Kérjük, próbálja meg később.');
        }

        $subject = '=?UTF-8?B?' . base64_encode('Új megkeresés a Beauty Studio Zugló weboldaláról') . '?=';
        $body = "Új megkeresés a Beauty Studio Zugló weboldaláról\n\n"
            . "Név: $name\nE-mail: $email\nTelefonszám: $phone\nSzolgáltatás: $service\n\n"
            . "Üzenet:\n$message\n\nAz adatvédelmi tájékoztatót a küldő elfogadta.\n";
        $encodedBody = chunk_split(base64_encode($body), 76, "\r\n");
        // String headers also work on PHP versions predating array support in mail().
        $headers = implode("\r\n", [
            'From: Beauty Studio Zugló <' . SENDER . '>',
            'Reply-To: ' . $email,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: base64',
        ]);

        $sent = $send(RECIPIENT, $subject, $encodedBody, $headers);
        if (!$sent) $sent = $send(BACKUP_RECIPIENT, $subject, $encodedBody, $headers);
        if (!$sent) {
            error_log('Beauty Studio contact: mail transport rejected both delivery attempts.');
            return result(503, 'Az üzenetet nem sikerült átadni a levelezőszervernek. Kérjük, próbálja meg később, vagy írjon közvetlenül e-mailt.');
        }

        return result(200, 'Köszönjük! Az üzenetet átadtuk a levelezőszervernek. A megadott elérhetőségen jelentkezünk.');
    } catch (\Exception $error) {
        return unavailable($error);
    } catch (\Throwable $error) {
        // PHP 7+ Error/TypeError do not inherit from Exception.
        return unavailable($error);
    }
}

function run() {
    ini_set('display_errors', '0');
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    header('X-Robots-Tag: noindex');

    try {
        $raw = file_get_contents('php://input', false, null, 0, MAX_BODY_BYTES + 1);
        $storage = sys_get_temp_dir() . '/beautystudio-contact-' . substr(hash('sha256', __DIR__), 0, 16);
        $response = handle(
            $_SERVER,
            $raw === false ? '' : $raw,
            $storage,
            __NAMESPACE__ . '\\deliverMail',
            PHP_SAPI === 'cli-server'
        );
    } catch (\Exception $error) {
        $response = unavailable($error);
    } catch (\Throwable $error) {
        $response = unavailable($error);
    }

    http_response_code($response['status']);
    if ($response['status'] === 405) header('Allow: POST');
    if ($response['status'] === 429) header('Retry-After: 3600');
    echo json_encode($response['body'], JSON_UNESCAPED_UNICODE);
}

if (realpath(isset($_SERVER['SCRIPT_FILENAME']) ? $_SERVER['SCRIPT_FILENAME'] : '') === __FILE__) run();
