<?php
session_start();
include_once('inc/users.inc');

$username = $_POST['user'];
$password = $_POST['password'];

$xml = simplexml_load_file("xml/users.xml");

if (isset($_GET['action']) && $_GET['action'] == "logout") { //Si on se deconnecte
	logout();
	header("Location: index.php");
	exit;
}
else {
	if (login($username, md5($password))) {
		header("Location: index.php");
		exit;
	}
	else {
		header("Location: login.php#refused");
		exit;
	}
}
?>
