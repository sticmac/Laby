//Génération de la map du labyrinthe

//Variables globales
var lines = 10;
var colonnes = 15;


function createGrid() {
	//Création de la table contenant toutes les cases de la grille
	var table = "<table>\n";
	for (var x = 0 ; x < lines ; x++) {
		table += "<tr>\n";
		for (var y = 0 ; y < colonnes ; y++) {
			table += "<td style='padding: 10px; background-color: green;' id='"+x+","+y+"'></td>";
		}
		table += "</tr>\n";
	}
	table += "</table>\n";
	document.getElementById("laby").innerHTML = table;
}

function go() {
	createGrid();
}
