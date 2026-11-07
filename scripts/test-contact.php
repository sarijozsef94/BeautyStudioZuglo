<?php
declare(strict_types=1);

require __DIR__ . '/../public/api/contact.php';

$checks = 0;
function check(bool $condition, string $message): void {
    global $checks;
    $checks++;
    if (!$condition) throw new RuntimeException($message);
}

$directory = sys_get_temp_dir() . '/beautystudio-contact-test-' . bin2hex(random_bytes(8));
$server = [
    'REQUEST_METHOD' => 'POST',
    'CONTENT_TYPE' => 'application/json',
    'HTTP_ORIGIN' => 'https://beautystudiozuglo.hu',
    'REMOTE_ADDR' => '192.0.2.1',
];
$data = [
    'name' => 'Teszt Elek',
    'email' => 'teszt@example.invalid',
    'phone' => '+36 20 000 0000',
    'service' => 'Arckezelés',
    'message' => "Próba üzenet.\nMásodik sor.",
    'privacy' => 'accepted',
    'website' => '',
];
$sent = [];
$send = static function (string $to, string $subject, string $body, string $headers) use (&$sent): bool {
    $sent[] = compact('to', 'subject', 'body', 'headers');
    return true;
};
$request = static function (
    array $payload,
    array $overrides = [],
    ?callable $transport = null,
    string $storageIp = '192.0.2.1',
    int $now = 10000
) use ($server, $directory, $send): array {
    $requestServer = array_replace($server, ['REMOTE_ADDR' => $storageIp], $overrides);
    return \BeautyStudio\Contact\handle(
        $requestServer,
        json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
        $directory,
        $transport ?? $send,
        false,
        $now
    );
};

try {
    check($request($data, ['REQUEST_METHOD' => 'GET'])['status'] === 405, 'Only POST is allowed.');
    check($request($data, ['HTTP_ORIGIN' => 'https://evil.example'])['status'] === 403, 'Cross-origin requests are rejected.');
    check($request($data, ['HTTP_ORIGIN' => ''])['status'] === 403, 'Requests without an allowed origin are rejected.');
    check($request($data, ['CONTENT_TYPE' => 'text/plain'])['status'] === 415, 'Only JSON is accepted.');
    check(\BeautyStudio\Contact\handle($server, str_repeat('x', 24001), $directory, $send)['status'] === 413, 'Oversized bodies are rejected.');
    check(\BeautyStudio\Contact\handle($server, '{invalid', $directory, $send)['status'] === 400, 'Invalid JSON is rejected.');
    check(\BeautyStudio\Contact\handle($server, '[]', $directory, $send)['status'] === 400, 'JSON lists are rejected.');

    foreach ([
        ['email' => "teszt@example.invalid\r\nBcc:spam@example.invalid"],
        ['email' => 'invalid'],
        ['name' => ''],
        ['name' => "Teszt\nNév"],
        ['name' => ['invalid']],
        ['message' => str_repeat('á', 5001)],
        ['message' => '  '],
        ['website' => 'spam.example'],
        ['privacy' => ''],
        ['service' => str_repeat('x', 161)],
    ] as $change) {
        check($request(array_replace($data, $change), [], null, '192.0.2.2')['status'] === 422, 'Invalid fields are rejected: ' . implode(',', array_keys($change)));
    }
    check(count($sent) === 0, 'Invalid submissions never call the mail transport.');

    $success = $request($data, [], null, '192.0.2.3');
    check($success['status'] === 200 && $success['body']['ok'] === true, 'Valid submission succeeds.');
    $mail = $sent[count($sent) - 1];
    check($mail['to'] === 'alexandrakohari@beautystudiozuglo.hu', 'Primary recipient is fixed.');
    $headerLines = explode("\r\n", $mail['headers']);
    check(in_array('From: Beauty Studio Zugló <alexandrakohari@beautystudiozuglo.hu>', $headerLines, true), 'Sender is the domain mailbox.');
    check(in_array('Reply-To: ' . $data['email'], $headerLines, true), 'Reply-To uses the validated visitor address.');
    check(str_contains(base64_decode($mail['body']), $data['message']), 'Encoded message preserves accented multiline text.');

    $fallbackRecipients = [];
    $fallback = static function (string $to) use (&$fallbackRecipients): bool {
        $fallbackRecipients[] = $to;
        return count($fallbackRecipients) === 2;
    };
    check($request($data, [], $fallback, '192.0.2.4')['status'] === 200, 'Backup recipient succeeds when primary fails.');
    check($fallbackRecipients === [
        'alexandrakohari@beautystudiozuglo.hu',
        'info@beautystudiozuglo.hu',
    ], 'Backup recipient is used only after primary delivery fails.');

    $failedRecipients = [];
    $failed = $request($data, [], static function (string $to) use (&$failedRecipients): bool {
        $failedRecipients[] = $to;
        return false;
    }, '192.0.2.5');
    check($failed['status'] === 503 && $failed['body']['ok'] === false, 'Mail transport failure is never reported as success.');
    check(count($failedRecipients) === 2, 'Both configured recipients are tried.');

    foreach ([new RuntimeException('Storage unavailable'), new Error('Disabled mail function'), new TypeError('Invalid transport configuration')] as $failure) {
        $response = $request($data, [], static function () use ($failure): bool {
            throw $failure;
        }, '192.0.2.7');
        check($response['status'] === 503 && $response['body']['ok'] === false, 'Exceptions and PHP errors return a failure response.');
        check(!str_contains(json_encode($response['body']), $failure->getMessage()), 'Internal error details are not exposed to visitors.');
    }

    $blockedStorage = $directory . '/limits.json';
    $sentBeforeStorageFailure = count($sent);
    $storageFailure = \BeautyStudio\Contact\handle($server, json_encode($data), $blockedStorage, $send);
    check($storageFailure['status'] === 503, 'Unavailable rate-limit storage returns a failure response.');
    check(count($sent) === $sentBeforeStorageFailure, 'Unavailable storage does not bypass spam protection.');

    for ($i = 0; $i < 5; $i++) {
        check($request($data, [], null, '192.0.2.6')['status'] === 200, 'Requests within the per-IP limit succeed.');
    }
    $sentBeforeLimit = count($sent);
    check($request($data, [], null, '192.0.2.6')['status'] === 429, 'The next request is rate limited.');
    check(count($sent) === $sentBeforeLimit, 'Rate-limited requests do not send mail.');

    $stored = file_get_contents($directory . '/limits.json');
    foreach ([$data['email'], $data['name'], $data['message'], '192.0.2.6'] as $private) {
        check(!str_contains($stored, $private), 'Rate-limit storage contains no personal data.');
    }
    if (function_exists('mail')) {
        check(!\BeautyStudio\Contact\deliverMail('teszt@example.invalid', 'Test', 'Test', ''), 'CLI tests cannot send real email.');
    } else {
        $disabledMail = $request($data, [], '\\BeautyStudio\\Contact\\deliverMail', '192.0.2.8');
        check($disabledMail['status'] === 503, 'Disabled native mail is handled without a fatal error.');
    }

    echo "Contact backend: $checks checks passed; no real email sent.\n";
} finally {
    if (is_file($directory . '/limits.json')) unlink($directory . '/limits.json');
    if (is_dir($directory)) rmdir($directory);
}
