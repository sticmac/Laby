//Génération de la map du labyrinthe

//Variables globales
var lines = 10;
var columns = 15;
var lenCase = 0;
var character;

var lastCase = [0,0];
var lastRoom = [0,0];

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
			var classname = map[0].cases[x][y].nature;
			table += "<td class='"+classname+"' style='padding: "+lenCase+"px; background-color: "+getBackgroundFromElement(classname)+";' id='"+x+","+y+"'></td>";
		}
		table += "</tr>\n";
	}
	table += "</table>\n";
	document.getElementById("laby").innerHTML = table;
	document.getElementById(5+","+7).classList.add("char");
}

function update() {
	for (var i = 0 ; i < columns ; i++) {
		for (var j = 0 ; j < lines ; j++) {
			var elt = document.getElementById(i+","+j);
			elt.style["background-color"] = getBackgroundFromElement(elt.classList[0]);
		}
	}
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
		case "char":
			return "red";
			break;
		default:
			return "green";
			break;
	}
}

function changePos(evt) {
	var key = evt.which || evt.keyCode;
	document.getElementById(lastCase[0]+','+lastCase[1]).classList.remove("char");
	switch (key) {
		case 37:
		case 81:
			//Flèche gauche ou Q
			if (canMove(character.roomCase[0]-1, character.roomCase[1])) {
				character.roomCase[0]--;
			}
			break;
		case 38:
		case 90:
			//Flèche haut ou Z
			if (canMove(character.roomCase[0], character.roomCase[1]-1)) {
				character.roomCase[1]--;
			}
			break;
		case 39:
		case 68:
			//Flèche droite ou D
			if (canMove(character.roomCase[0]+1, character.roomCase[1])) {
				character.roomCase[0]++;
			}
			break;
		case 40:
		case 83:
			//Flèche bas ou S
			if (canMove(character.roomCase[0], character.roomCase[1]+1)) {
				character.roomCase[1]++;
			}
			break;
	}
	lastCase[0] = character.roomCase[0];
	lastCase[1] = character.roomCase[1];
	document.getElementById(lastCase[0]+','+lastCase[1]).classList.add("char");
}

function canMove(x, y) {
	if(x < columns && y < lines && x >= 0 && y >= 0
			&& document.getElementById(x+','+y).className != "wall") {
		return true;
	}
	else return false;
}

function go() {
	changeSizes();
	getMapPHP();
	character = new Character(0,0,5,7);
	lastCase = [5,7];
	setInterval(update, 100);
}
