<?php
$data = json_decode(file_get_contents('php://input'));

$name = filter_var($data->name, FILTER_SANITIZE_STRING);
$phone = filter_var($data->phone, FILTER_SANITIZE_STRING);
$service = filter_var($data->service, FILTER_SANITIZE_STRING);

// if (mb_strlen($date) > 10 || (mb_strlen($time) > 8) || (mb_strlen($phoneNum) > 22)) {
//     exit();
// }

require "connect-localhost.php";
// require "connect.php";

$mysql->query("INSERT INTO `yoga_client` (`id`, `user`, `phone`, `userClass`) 
VALUES(NULL, '$name', '$phone', '$service')");

$mysql->close();
?>
