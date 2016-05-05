<?php
function login($user, $pass) {
	$xml = simplexml_load_file("./xml/users.xml");
	$ret = $xml->xpath("user[@login='$user']");
	if (count($ret) == 0) { //L'authentification a échouée
		$_SESSION["error"] = "L'utilisateur n'existe pas";
		return false;
	}
	elseif ($ret[0]['password'] != $pass) {
		$_SESSION["error"] = "Mot de passe incorrect";
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
	if (count($xml->xpath("user[@login=\"$user\"]"))==0) {
		$u = $xml->addChild('user');
		$u['login'] = $user;
		$u['password'] = $password;
		if (!$xml->asXML('./xml/users.xml')) { 
			$_SESSION["error"] = "Impossible de sauvegarder le fichier XML";
			return false;
		}
		else {
			return true;
		}
	}
	else {
		$_SESSION["error"] = "L'utilisateur est déjà existant";
		return false;
	}
}	

function getUser($xml, $login, $pass) {
	if (isRegistered($login, $pass)) {
		return $xml->xpath("user[@login='$login' and @password='$pass']")[0];
	}
	else {
		return false;
	}
}

?>
