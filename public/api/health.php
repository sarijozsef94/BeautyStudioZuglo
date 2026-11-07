<?php
// Independent PHP smoke check: no includes, storage, mail, or server details.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('X-Robots-Tag: noindex');
echo '{"ok":true}';
