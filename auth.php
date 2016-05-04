<?php
session_start();
include_once('inc/users.inc');

if (isset($_GET['action']) && $_GET['action'] == "logout") { //Si on se deconnecte
	logout();
	header("Location: index.php");
	exit;
}
else {
	$username = $_POST['user'];
	$password = $_POST['password'];

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
