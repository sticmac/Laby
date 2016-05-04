//Génération de la map du labyrinthe

//Variables globales
var lines = 10;
var columns = 15;
var lenCase = 0; //longueur du côté d'une case (pour l'affichage)
var character; //personnage à déplacer
var map = new Object(); //tableau du json parsé caractérisant toutes les salles du labyrinthe

var lastCase = [0,0]; //sauvegarde de la dernière case où se trouvait le personnage avant déplacement 
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
				map = JSON.parse(xhr.responseText);
				createGrid(0,0);
			}
			else { console.log("Erreur "+xhr.status); }
		}
	}

	xhr.send();
}				

function createGrid(xRoom, yRoom) { //crée la grille correspondant à la salle de coordonnées x,y
	//Création de la table contenant toutes les cases de la grille
	var table = "<table>\n";
	for (var y = 0 ; y < lines ; y++) {
		table += "<tr>\n";
		for (var x = 0 ; x < columns ; x++) {
			var classname = map[xRoom][yRoom][x][y];
			table += "<td class='"+classname+"' style='padding: "+lenCase+"px;' id='"+x+","+y+"'></td>";
		}
		table += "</tr>\n";
	}
	table += "</table>\n";
	document.getElementById("laby").innerHTML = table;
	document.getElementById(character.roomCase[0]+","+character.roomCase[1]).classList.add("char");
}

function update() {
	for (var i = 0 ; i < columns ; i++) {
		for (var j = 0 ; j < lines ; j++) {
			var elt = document.getElementById(i+","+j);
			var style = "";
			for (var k = elt.classList.length-1 ; k >= 0 ; k--) {
				style += "url("+getBackgroundFromElement(elt.classList[k])+")";
				if (k != 0) style += ", ";
			}
			elt.style["background-image"] = style;
		}
	}
}

function changeSizes() { 
	var size = document.getElementById("laby").clientWidth;
	lenCase = size/(2*columns)-2;
}    

function getBackgroundFromElement(classname) {
	switch (classname) {
		case "wall":
			return "img/wall.png";
			break;
		case "char":
			return "img/character.png";
			break;
		case "door":
			return "img/door.png";
			break;
		default:
			return "img/grass.png";
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
			if (canMoveToCase(character.roomCase[0]-1, character.roomCase[1])) {
				character.roomCase[0]--;
			}
			else if (character.roomCase[0] == 0 && canMoveToRoom(character.room[0]-1, character.room[1])) {
				character.roomCase[0] = columns-1;
				character.room[0]--;
				createGrid(character.room[0], character.room[1]);
			}
			break;
		case 38:
		case 90:
			//Flèche haut ou Z
			if (canMoveToCase(character.roomCase[0], character.roomCase[1]-1)) {
				character.roomCase[1]--;
			}
			else if (character.roomCase[1] == 0 && canMoveToRoom(character.room[0], character.room[1]-1)) {
				character.roomCase[1] = lines-1;
				character.room[1]--;
				createGrid(character.room[0], character.room[1]);
			}
			break;
		case 39:
		case 68:
			//Flèche droite ou D
			if (canMoveToCase(character.roomCase[0]+1, character.roomCase[1])) {
				character.roomCase[0]++;
			}
			else if (character.roomCase[0] == columns-1 && canMoveToRoom(character.room[0]+1, character.room[1])) {
				character.roomCase[0] = 0;
				character.room[0]++;
				createGrid(character.room[0], character.room[1]);
			}
			break;
		case 40:
		case 83:
			//Flèche bas ou S
			if (canMoveToCase(character.roomCase[0], character.roomCase[1]+1)) {
				character.roomCase[1]++;
			}
			else if (character.roomCase[1] == lines-1 && canMoveToRoom(character.room[0], character.room[1]+1)) {
				character.roomCase[1] = 0;
				character.room[1]++;
				createGrid(character.room[0], character.room[1]);
			}
			break;
	}
	lastCase[0] = character.roomCase[0];
	lastCase[1] = character.roomCase[1];
	document.getElementById(lastCase[0]+','+lastCase[1]).classList.add("char");
}

function canMoveToCase(x, y) {
	if(x < columns && y < lines && x >= 0 && y >= 0
			&& !document.getElementById(x+','+y).classList.contains("wall")) {
		return true;
	}
	else return false;
}

function canMoveToRoom(x, y) {
	if (map[x] && map[x][y]) return true;
	else return false;
}
	
function go() {
	changeSizes();
	getMapPHP();
	character = new Character(0,0,5,7);
	lastCase = [5,7];
	setInterval(update, 100);
}
