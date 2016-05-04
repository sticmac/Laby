<?php

$xml = simplexml_load_file("xml/maps.xml");

if (empty($_GET) || empty($_GET["action"])){
	header("Content-type: text/json");

	$maps = $xml->xpath("map");
	echo (string)$maps[0];
	exit;
}
elseif ($_GET["action"] == "save") {
	$u = $xml->addChild('map', $_POST["json"]);
	if (!$xml->asXML('xml/maps.xml')) {
		echo "Impossible de sauvegarder le fichier XML";
	}
}

?>
