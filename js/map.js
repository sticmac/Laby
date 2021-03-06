//Génération de la map du labyrinthe

//Variables globales
var lines = 10;
var columns = 15;
var lenCase = 0; //longueur du côté d'une case (pour l'affichage)
var character; //personnage à déplacer
var nbKeys = 0;
var map = new Object(); //tableau du json parsé caractérisant toutes les salles du labyrinthe

var timeIni = (new Date()).getTime(); //Initialisation d'une date à un temps 0
var score; //Sera la valeur de timeIni.getTime() à la fin de la partie (le temps qu'aura mis le joueur en millisecondes pour sortir du labyrinthe)

var lastCase = [0,0]; //sauvegarde de la dernière case où se trouvait le personnage avant déplacement 
var lastRoom = [0,0];

//Objet Character
//Paramêtres : xS, yS : coordonnées de la salle de départ
//		xC, yC : coordonnées de la case de départ
function Character(xS, yS, xC, yC) {
	this.room = [xS, yS];
	this.roomCase = [xC, yC];
}

//Objet à passer dans la chaine JSON
function Map(p, c, s) {
	this.initPos = p;
	this.cases = c;
	this.score = s;
}

function getMapPHP() {
	var xhr = new XMLHttpRequest();
	var json = new Object();
	xhr.open("GET", "./save.php");

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) { //lorsque la requête est prête
			if (xhr.status == 200) {
				var json = JSON.parse(xhr.responseText);
				map = json.cases;
				score = json.score;
				character = new Character(parseInt(json.initPos[0]), parseInt(json.initPos[1]), parseInt(json.initPos[2]), parseInt(json.initPos[3]));
				lastCase = [parseInt(json.initPos[2]),parseInt(json.initPos[3])];
				createGrid(parseInt(json.initPos[0]),parseInt(json.initPos[1]));
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

function saveMap() {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "./save.php?action=saveParty");
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) { //lorsque la requête est prête
			if (xhr.status != 200) {
				console.log("Erreur "+xhr.status); }
		}
	}

	xhr.send("json="+JSON.stringify(new Map([lastRoom[0], lastRoom[1], lastCase[0], lastCase[1]], map, score)));
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
		case "chest":
			return "img/chest.png";
			break;
		case "key":
			return "img/key.png";
			break;
		case "exit":
			return "img/exit.png";
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
	lastRoom[0] = character.room[0];
	lastRoom[1] = character.room[1];
	lastCase[0] = character.roomCase[0];
	lastCase[1] = character.roomCase[1];
	document.getElementById(lastCase[0]+','+lastCase[1]).classList.add("char");
	
	if (document.getElementById(lastCase[0]+','+lastCase[1]).classList[0] == "key") {
		document.getElementById(lastCase[0]+','+lastCase[1]).classList.remove("key", "char");
		document.getElementById(lastCase[0]+','+lastCase[1]).classList.add("ground", "char");
		map[lastRoom[0]][lastRoom[1]][lastCase[0]][lastCase[1]] = "ground";
		addKeys(1);
	}
	
	else if (document.getElementById(lastCase[0]+','+lastCase[1]).classList[0] == "exit") {
		endGame();
	}
}

function endGame() {
	score += (new Date()).getTime() - timeIni;
	alert("Vous avez gagné ! Votre score est de : "+score);


	//Reset de la sauvegarde
	var xhr1 = new XMLHttpRequest();
	xhr1.open("GET", "./save.php?action=reset");
	xhr1.onreadystatechange = function() {
		if (xhr1.readyState == 4) { //lorsque la requête est prête
			if (xhr1.status == 200) {
				//Enregistrement du score
				var xhr2 = new XMLHttpRequest();
				xhr2.open("POST", "./save.php?action=score");
				xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr2.onreadystatechange = function() {
					if(xhr2.readyState == 4) {
						if (xhr2.status == 200) {
							document.location.href="index.php";
						}
						else {
							console.log("Erreur "+xhr2.status);
						}
					}
				}
				xhr2.send("score="+score);		
			}
			else {
				console.log("Erreur "+xhr1.status);
			}
		}
	}
	xhr1.send(null);
}

function canMoveToCase(x, y) {
	//Si on ne sort pas de la grille
	if(x < columns && y < lines && x >= 0 && y >= 0
			//et que l'on ne va pas dans un mur...
			&& !document.getElementById(x+','+y).classList.contains("wall")) {
		//Cas de la porte
		if(document.getElementById(x+','+y).classList.contains("door")) {
			return passThroughDoor(x,y);
		}
		else {	
			return true;
		}
	}
	else return false;
}

function passThroughDoor(x, y) {
	if (nbKeys == 0) return false;
	else {
		addKeys(-1);
		document.getElementById(x+','+y).className = "ground";
		map[lastRoom[0]][lastRoom[1]][x][y] = "ground";
		return true;
	}
}

function canMoveToRoom(x, y) {
	if (map[x] && map[x][y]) return true;
	else return false;
}

function addKeys(nb) {
	nbKeys += nb;
	document.getElementById("inventory").innerHTML = "Clés : "+nbKeys;
}
	
function go() {
	changeSizes();
	getMapPHP();
	setInterval(update, 100);
}
