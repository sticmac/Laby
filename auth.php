<?php
include_once('inc/users.inc');

$username = $_POST['user'];
$password = $_POST['password'];

$xml = simplexml_load_file("xml/users.xml");


if (login($username, md5($password))) header("Location: index.php");
else header("Location: login.php#refused");
?>
