//Génération de la map du labyrinthe

//Variables globales
var lines = 10;
var columns = 15;
var lenCase = 0;
var character = new Character(0,0,5,7);
//var character = [0, 0, 5, 7];

//Objet Character
//Paramêtres : xS, yS : coordonnées de la salle de départ
//		xC, yC : coordonnées de la case de départ
function Character(xS, yS, xC, yC) {
	this.room = [xS, yS];
	this.roomCase = [xC, yC];
}


function getMapPHP() {
	var xhr = new XMLHttpRequest();
	var json = new Object();
	xhr.open("GET", "./save.php");

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) { //lorsque la requête est prête
			if (xhr.status == 200) {
				json = JSON.parse(xhr.responseText);
				createGrid(json);
			}
			else { console.log("Erreur "+xhr.status); }
		}
	}

	xhr.send();
}				

function createGrid(map) {
	//Création de la table contenant toutes les cases de la grille
	var table = "<table>\n";
	for (var y = 0 ; y < lines ; y++) {
		table += "<tr>\n";
		for (var x = 0 ; x < columns ; x++) {
			var classname = map[0].cases[y][x].nature;
			table += "<td class='"+classname+"' style='padding: "+lenCase+"px; background-color: "+getBackgroundFromElement(classname)+";' id='"+x+","+y+"'></td>";
		}
		table += "</tr>\n";
	}
	table += "</table>\n";
	document.getElementById("laby").innerHTML = table;
}

function changeSizes() {                                                                              
	var height = window.innerHeight                                                               
	  || document.documentElement.clientHeight                                                    
    	  || document.body.clientHeight;                                                              
	var width = window.innerWidth                                                                 
	  || document.documentElement.clientWidth                                                     
	  || document.body.clientWidth;                                                               
														      
	var heightCases = height/(2*lines)-2;                                                      
	var widthCases = width/(2*columns)-2;

	lenCase = Math.min(heightCases, widthCases);	
}    

function getBackgroundFromElement(classname) {
	switch (classname) {
		case "wall":
			return "black";
			break;
		default:
			return "green";
			break;
	}
}

function go() {
	changeSizes();
	getMapPHP();
}
