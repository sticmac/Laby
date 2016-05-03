<?php
function login($xml, $login, $pass) {
	$ret = $xml->xpath("login[@login='$login' and @password='$pass'");
	return (count($ret) == 1);
}

function getUser($xml, $login, $pass) {
	if (isRegistered($login, $pass)) {
		return $xml->xpath("login[@login='$login' and @password='$pass']")[0];
	}
	else {
		return false;
	}
}

?>
