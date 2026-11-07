<?php
/**
 * Beauty Studio Zugló by Alexa - Kapcsolatfelvételi űrlap feldolgozó (PHP)
 * Weboldal: https://beautystudiozuglo.hu
 * Címzett: alexandrakohari@beautystudiozuglo.hu / info@beautystudiozuglo.hu
 */

// Hibák elrejtése a válaszban (éles környezet)
error_reporting(0);
ini_set('display_errors', '0');

// CORS és fejléc beállítások
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Preflight OPTIONS kérés kezelése
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Csak POST kérést fogadunk el
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Csak a POST metódus engedélyezett.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Bemeneti adatok beolvasása (JSON vagy x-www-form-urlencoded / multipart)
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

// Spam védelem / Honeypot mező ellenőrzése
if (!empty($data['honeypot']) || !empty($data['website'])) {
    // Robot töltötte ki a rejtett mezőt
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Üzenet sikeresen elküldve.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Adatok kinyerése és tisztítása
$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$service = isset($data['service']) ? trim(strip_tags($data['service'])) : 'Általános érdeklődés / Időpontfoglalás';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';
$privacy = isset($data['privacy']) ? (bool)$data['privacy'] : false;

// Validáció
$errors = [];

if (empty($name) || mb_strlen($name) < 2) {
    $errors['name'] = 'Kérjük, adja meg nevét (legalább 2 karakter).';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Kérjük, érvényes e-mail címet adjon meg.';
}

if (empty($message) || mb_strlen($message) < 5) {
    $errors['message'] = 'Kérjük, írjon üzenetet (legalább 5 karakter).';
}

if (!$privacy) {
    $errors['privacy'] = 'Az adatvédelmi tájékoztató elfogadása kötelező a kapcsolatfelvételhez.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Kérjük, javítsa az űrlapon található hibákat.',
        'errors' => $errors
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Címzett és levél beállítások
$to = "alexandrakohari@beautystudiozuglo.hu";
$backupTo = "info@beautystudiozuglo.hu";
$subject = "Új megkeresés a weboldalról: " . $name;
$subjectEncoded = "=?UTF-8?B?" . base64_encode($subject) . "?=";

$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safePhone = !empty($phone) ? htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') : 'Nem lett megadva';
$safeService = htmlspecialchars($service, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$dateTime = date('Y.m.d H:i:s');
$userIp = $_SERVER['REMOTE_ADDR'] ?? 'Ismeretlen';

$emailBody = "
<!DOCTYPE html>
<html lang='hu'>
<head>
  <meta charset='UTF-8'>
  <title>Új üzenet a weboldalról</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #FAF5E5; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2d9c2; overflow: hidden; }
    .header { background: #0F172A; color: #DCA54A; padding: 24px; text-align: center; }
    .header h2 { margin: 0; font-size: 22px; font-weight: normal; }
    .content { padding: 24px; }
    .field { margin-bottom: 16px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px; }
    .label { font-size: 12px; font-weight: bold; text-transform: uppercase; color: #888; }
    .value { font-size: 15px; color: #222; margin-top: 4px; }
    .message-box { background: #fafafa; border-left: 4px solid #DCA54A; padding: 15px; border-radius: 4px; }
    .footer { background: #f8f8f8; padding: 12px 24px; font-size: 12px; color: #777; text-align: center; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h2>Beauty Studio Zugló by Alexa</h2>
      <p style='margin: 5px 0 0; color: #f0e6c5; font-size: 14px;'>Új kapcsolatfelvételi üzenet érkezett</p>
    </div>
    <div class='content'>
      <div class='field'>
        <div class='label'>Küldő neve:</div>
        <div class='value'><strong>{$safeName}</strong></div>
      </div>
      <div class='field'>
        <div class='label'>E-mail cím:</div>
        <div class='value'><a href='mailto:{$safeEmail}'>{$safeEmail}</a></div>
      </div>
      <div class='field'>
        <div class='label'>Telefonszám:</div>
        <div class='value'>{$safePhone}</div>
      </div>
      <div class='field'>
        <div class='label'>Választott szolgáltatás / Téma:</div>
        <div class='value'>{$safeService}</div>
      </div>
      <div class='field'>
        <div class='label'>Üzenet:</div>
        <div class='value message-box'>{$safeMessage}</div>
      </div>
    </div>
    <div class='footer'>
      Küldés ideje: {$dateTime} | IP: {$userIp}<br>
      Adatkezelési hozzájárulás: Elfogadva
    </div>
  </div>
</body>
</html>
";

// E-mail fejlécek beállítása
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Beauty Studio Zugló <no-reply@beautystudiozuglo.hu>',
    'Reply-To: ' . $safeName . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
];

// Levél küldése
$mailSent = @mail($to, $subjectEncoded, $emailBody, implode("\r\n", $headers));

// Biztonsági másolat a másodlagos címre ha az első sikerült vagy sem
if (!$mailSent) {
    $mailSent = @mail($backupTo, $subjectEncoded, $emailBody, implode("\r\n", $headers));
}

// Opcionális naplózás helyi fájlba (biztonság kedvéért)
$logEntry = [
    'date' => $dateTime,
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'service' => $service,
    'message' => $message,
    'mail_sent' => $mailSent
];
@file_put_contents(__DIR__ . '/contact_submissions.json', json_encode($logEntry, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND);

// Válasz küldése a kliensnek
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Köszönjük megkeresését! Üzenetét sikeresen rögzítettük és hamarosan felvesszük Önnel a kapcsolatot.',
    'mail_sent' => $mailSent
], JSON_UNESCAPED_UNICODE);
