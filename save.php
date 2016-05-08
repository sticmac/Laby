<?php
include_once("inc/save.inc");

if (empty($_GET) || empty($_GET["action"])){ //chargement d'une map au hasard (nouvelle partie par défaut)
	loadParty();
}
elseif ($_GET["action"] == "save") { //sauvegarde d'une nouvelle map créée dans l'éditeur dans la base de données xml
	saveNewmap($_POST["json"]);
}
elseif ($_GET["action"] == "saveParty") { //sauvegarde de la partie d'un joueur connecté dans la base de données des utilisateurs
	saveParty($_POST["json"]);
}
?>
