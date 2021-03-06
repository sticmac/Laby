//Editeur de carte

//Variables globales
var lines = 10;
var columns = 15;
var lenCase = 0;
var selectedButton = "ground";
var currentMap = [0,0];
var maps = [];

//Objet à passer dans la chaine JSON
function Map(p, c, s) {
	this.initPos = p;
	this.cases = c;
	this.score = s;
}

function createGrid() {
	//Création de la carte vide
	var table = "<table>\n";
	for (var y = 0 ; y < lines ; y++) {
		table += "<tr>\n";
		for (var x = 0 ; x < columns ; x++) {
			table += "<td class='"+maps[currentMap[0]][currentMap[1]][x][y]+"' onclick=\"changeClass("+x+","+y+");\" style='padding: "+lenCase+"px; background-color: "+getBackgroundFromElement()+";' id='"+x+","+y+"'></td>";
		}
		table += "</tr>\n";
	}
	table += "</table>\n";
	document.getElementById("laby").innerHTML = table;
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

function selectButton(but) {
	selectedButton = but;
}

function changeClass(x, y) {
	document.getElementById(x+","+y).className = selectedButton;
	
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

function sendMap() {
	saveMap();
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "./save.php?action=save");
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4){
			if (xhr.status != 200){
				console.log("Error "+xhr.status);
			}
		}
	}
	var json = new Map([0,0,document.getElementsByName("initCaseX")[0].value, document.getElementsByName("initCaseY")[0].value], maps, 0);
	xhr.send("json="+JSON.stringify(json));
	alert("Map créée");
	location.reload();
}

function addMap() {
	x = document.getElementsByName("coorX")[0].value;
	y = document.getElementsByName("coorY")[0].value;
	if (parseInt(x) == x && parseInt(y) == y && x <= 50 && x >= 0 && y <= 50 && y >= 0) {
		document.getElementById("boutons").innerHTML += "<td> <input type=\"button\" value=\""+x+","+y+"\" onclick=\"changeMap("+x+","+y+");\" /> </td>";
	}
}

function changeMap(x, y) {
	saveMap();
	currentMap = [x, y];
	if (!maps[currentMap[0]]) {
		initMap();
	}
	else if (!maps[currentMap[0]][currentMap[1]]) {
		initMap();
	}
	createGrid();
}

function saveMap() {
	for (var x = 0 ; x < columns ; x++) {
		for (var y = 0 ; y < lines ; y++) {
			maps[currentMap[0]][currentMap[1]][x][y] = document.getElementById(x+","+y).className;
		}
	}
}

function initMap() {
	if (!maps[currentMap[0]]) {
		maps[currentMap[0]] = new Array();
	}
	maps[currentMap[0]][currentMap[1]] = new Array()
	for (var x = 0 ; x < columns ; x++) {
		maps[currentMap[0]][currentMap[1]][x] = new Array()
		for (var y = 0 ; y < lines ; y++) {
			maps[currentMap[0]][currentMap[1]][x][y] = "ground";
		}
	}
}

function go() {
	changeSizes();
	initMap();
	createGrid();
	setInterval(update, 100);
}
