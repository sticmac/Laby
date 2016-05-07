<?php require_once('inc/nav.inc'); 

if (empty($_SESSION["user"])) {
	header("Location: login.php"); //Impossible de jouer si deconnecté
	exit;
}?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Laby - Editeur de carte</title>
	<script src="js/map_creator.js"></script>
        <link type="text/css" rel="stylesheet" href="./css/bootstrap.min.css" />
        <link type="text/css" rel="stylesheet" href="./css/laby.css" />
</head>
<body onload="go()">
	<?php navbar(); ?>
	
	<div id="laby" class="col-md-8"></div>

	<div id="options" class="col-md-3 well">
		<h3>Options</h3>

		<div id="origin">
			<h4>Placement d'origine</h4>
			Salle de départ : X <input type="text" name="initRoomX"> Y <input type="text"name="initRoomY">
			Case de départ : X <input type="text" name="initCaseX"> Y <input type="text" name="initCaseY">
		</div>

		<div id="radios">
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('ground');" checked="checked">Sol</label>
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('wall');" >Mur</label>
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('ground');" >Porte ouverte</label>
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('door');" >Porte fermée</label>
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('chest');" >Coffre</label>
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('key');" >Clé</label>
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('exit');" >Sortie</label>
		</div>

		<div id="boutons">
			<input type="button" value="0,0" onclick="changeMap(0,0);" />
		</div>
		
		<div id="b_creator">
			Map X: <input type="text" name="coorX">
			Map Y: <input type="text" name="coorY">

			Ajouter une pièce : <input type="button" value="+" onclick="addMap();" />
		</div>

		<div>
			<input type="button" value="Envoyer" onclick="sendMap();" >
		</div>
	</div>
</body>
</html>
