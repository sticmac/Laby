<?php
include_once('inc/users.inc');

$username = $_POST['user'];
$password = $_POST['password'];

$xml = simplexml_load_file("xml/users.xml");


