<?php
function login($user, $pass) {
	$xml = simplexml_load_file("./xml/users.xml");
	$ret = $xml->xpath("user[@login='".$user."' and @password='".$pass."']");
	if (count($ret) == 0) { //L'authentification a échouée
		$_SESSION["error"] = "L'authentification a échouée";
		return false;
	}
	else { //On a réussi à se connecter !
		$_SESSION["user"] = $user;
		return true;
	}
}		

function logout() {
	$_SESSION = array();
	session_destroy();
}

function subscribe($user, $password) {
	$xml = simplexml_load_file("./xml/users.xml");
	$u = $xml->addChild('user');
	$u['user'] = $user;
	$u['password'] = $password;
	if ($xml->asXML('./xml/users.xml') && count($xml->xpath("user[@login='$user']"))==0) {
		return true;
	}
	elseif (count($xml->xpath("user[@login='$user']"))!=0) {
		$_SESSION["error"] = "L'utilisateur est déjà existant";
		return false;
	}
	else {
		$_SESSION["error"] = "Impossible de sauvegarder le fichier XML";
		return false;
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
