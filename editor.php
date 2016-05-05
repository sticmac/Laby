<?php require_once('inc/nav.inc'); ?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Editeur de carte</title>
	<script src="js/map_creator.js"></script>
        <link type="text/css" rel="stylesheet" href="./css/bootstrap.min.css" />
        <link type="text/css" rel="stylesheet" href="./css/laby.css" />
</head>
<body onload="go()">
	<?php navbar(); ?>
	
	<div id="laby" class="col-md-8"></div>
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('ground');" checked="checked">Sol</label>
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('wall');" >Mur</label>
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('ground');" >Porte ouverte</label>
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('door');" >Porte fermée</label>
			<label class="radio-inline"><input type="radio" name="optradio" onclick="selectButton('ground');" >Coffre</label>
	<br>
	<br>
	<div id="boutons">
		<td> <input type="button" value="0,0" onclick="changeMap(0,0);" /> </td>
	</div>
	<br>
	<div id="b_creator">
		Map X: <input type="text" name="coorX">
		Map Y: <input type="text" name="coorY">
	</div>
	Ajouter une pièce : <input type="button" value="+" onclick="addMap();" />
	<br>
	<br>
	<input type="button" value="Envoyer" onclick="sendMap();" >
</body>
</html>