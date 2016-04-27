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
		<tr><td> <input type="button" value="Coffre" onclick="changeClass();" /> </td></tr>
		<tr><td> <input type="button" value="UPDATE" onclick="sendMap();" /> </td></tr>
	</table>
	<table>
		<tr id="boutons">
			<td> <input type="button" value="0,0" onclick="changeMap();" /> </td>
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