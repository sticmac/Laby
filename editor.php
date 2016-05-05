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
	<table>
		<tr><td> <input type="button" value="Sol" onclick="changeClass();" /> </td></tr>
		<tr><td> <input type="button" value="Mur" onclick="changeClass('wall');" /> </td></tr>
		<tr><td> <input type="button" value="Porte ouverte" onclick="changeClass();" /> </td></tr>
		<tr><td> <input type="button" value="Porte fermée" onclick="changeClass();" /> </td></tr>
		<tr><td> <input type="button" value="Coffre" onclick="changeClass();" /> </td></tr>
		<tr><td> <input type="button" value="UPDATE" onclick="sendMap();" /> </td></tr>
	</table>
	<table>
		<tr id="boutons">
			<td> <input type="button" value="0,0" onclick="changeMap(0,0);" /> </td>
		</tr>
	</table>
	<table id="b_creator">
		Map X : <select name="coorX">
			<option value="-2">-2</option>
			<option value="-1">-1</option>
 			<option value="0">0</option> 
			<option value="1">1</option>
			<option value="2">2</option>
		</select>
		Map Y : <select name="coorY">
			<option value="-2">-2</option>
			<option value="-1">-1</option>
 			<option value="0">0</option> 
			<option value="1">1</option>
			<option value="2">2</option>
		</select>
		Ajouter : <input type="button" value="+" onclick="addMap();" />
	</table>
</body>
</html>
