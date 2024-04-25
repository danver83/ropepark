<?php

// Здесь нужно указать корректные названия полей из формы
$fields = [
  'name' => 'Имя: ',
  'tel' => 'Телефон: ',
  'email' => 'Email: ',
  'source' => 'Цель: '
];

function makeMessage($fields) {
  $result = [];
  foreach ($fields as $field => $title) {
    if (isset($_POST[$field])) {
      $result[] = $title . $_POST[$field];
    }
  }
  return implode("\r\n", $result) . "\r\n";
}

function makeHeaders($from, $admin) {
  return implode("\r\n", [
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "From: $from",
    "Reply-To: $admin"
  ]);
}

function encodeSubject($subject) {
  return '=?UTF-8?B?'.base64_encode($subject).'?=';
}

$admin = 'paydaniilwa@yandex.ru';
$from = 'no-replymasterseptic22.ru';
$subject = 'Заявка с сайта masterseptic22.ru';
$headers = makeHeaders($from, $admin);
$message = makeMessage($fields);

$status = mail($admin, encodeSubject($subject), $message, $headers);

// Здесь нужно указать корректный адрес сайта
header('Location: https://masterseptic22.ru/#');
