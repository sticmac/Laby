<?php
session_start();

//charge une nouvelle map (nouvelle partie par défaut)
function loadRandomMap() {
	header("Content-type: text/json");

	$xml = simplexml_load_file("xml/maps.xml");
	$maps = $xml->xpath("map");
	$index = rand(0, count($maps)-1);
	echo (string)$maps[$index];
	exit;
}

//sauvegarde une map créée dans l'éditeur
function saveNewMap($json) {
	$xml = simplexml_load_file("xml/maps.xml");
	$u = $xml->addChild('map', $json);
	if (!$xml->asXML('xml/maps.xml')) {
		echo "Impossible de sauvegarder le fichier XML";
	}
}

//sauvegarde de la partie d'un joueur connecté
function saveParty($json) {
	$users = simplexml_load_file("xml/users.xml");
	$u = $users->xpath("user[@login='$_SESSION[user]']")[0];
	if (!isset($u->save)) {
		$u ->addChild('save', $json);
	}
	else {
		$u->save = $json;
	}
	if (!$users->asXML('xml/users.xml')) {
		echo "Impossible de sauvegarder le fichier XML";
	}
}

function loadParty() {
	$users = simplexml_load_file("xml/users.xml");
	$u = $users->xpath("user[@login='$_SESSION[user]']")[0];
	$save = (string)$u->save;
	if (!empty($save)) {
		header ("Content-type: text/json");
		echo $save;
	}
	else {
		loadRandomMap();
	}
}

function resetParty() {
	saveParty("");
}
