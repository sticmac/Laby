<?php
function login($user, $pass) {
	$xml = simplexml_load_file("./xml/users.xml");
	$ret = $xml->xpath("user[@login='".$user."' and @password='".$pass."']");
	if (count($ret) == 0) { //L'authentification a écoutée
		return false;
	}
	else { //On a réussi à se connecter !
		session_start();
		$_SESSION["user"] = $user;
		return true;
	}
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
