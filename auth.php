<?php
session_start();
include_once('inc/users.inc');

if (isset($_GET['action'])) { //Si on se deconnecte
	if ($_GET['action'] == "logout") { 
		logout();
		header("Location: index.php");
		exit;
	}
	else if ($_GET['action'] == "subscribe") {
		if(subscribe($_POST["user"], md5($_POST["password1"]))) {
			header("Location: index.php");
			exit;
		}
		else {
			header("Location: subscribe.php#refused");
			exit;
		}
	}
}
else {
	$username = $_POST['user'];
	$password = $_POST['password'];

	if(login($username, md5($password))) { 
		header("Location: index.php");
		exit;
	}
	else {
		header("Location: login.php#refused");
		exit;
	}
}
?>
