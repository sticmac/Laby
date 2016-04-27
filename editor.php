<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Editeur de carte</title>
	<script src="js/map_creator.js"></script>
</head>
<body onload="go()">
	<div id="laby"></div>
	<table>
		<tr><td> <input type="button" value="Sol" onclick="changeClass();" /> </td></tr>
		<tr><td> <input type="button" value="Mur" onclick="changeClass('wall');" /> </td></tr>
		<tr><td> <input type="button" value="Porte ouverte" onclick="changeClass();" /> </td></tr>
		<tr><td> <input type="button" value="Porte fermée" onclick="changeClass();" /> </td></tr>
		<tr><td> <input type="button" value="UPDATE" onclick="sendMap();" /> </td></tr>
	</table>
</body>
</html>
