<?php
include_once('inc/users.inc');

$username = $_POST['user'];
$password = $_POST['password'];

$xml = simplexml_load_file("xml/users.xml");

if (isRegistered($xml, $username, md5($password))) {
	session_start();
	$_SESSION['user'] = $username;
	header("Location: index.php");
}
else header("Location: login.php#refused");
?>
