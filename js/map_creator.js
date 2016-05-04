//Editeur de carte

//Variables globales
var lines = 10;
var columns = 15;
var lenCase = 0;
var selectedCaseX = 0;
var selectedCaseY = 0;
var currentMap = [0,0];
var maps = [[]];

function createGrid() {
	//Création de la carte vide
	var table = "<table>\n";
	for (var y = 0 ; y < lines ; y++) {
		table += "<tr>\n";
		for (var x = 0 ; x < columns ; x++) {
			table += "<td class='"+maps[currentMap[0]][currentMap[1]][x][y]+"' onclick=\"selectCase("+x+","+y+");\" style='padding: "+lenCase+"px; background-color: "+getBackgroundFromElement()+";' id='"+x+","+y+"'></td>";
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
		default:
			return "img/grass.png";
			break;
	}
}

function selectCase(x, y) {
	selectedCaseX = x;
	selectedCaseY = y;
}

function changeClass(classe) {
	document.getElementById(selectedCaseX+","+selectedCaseY).className = classe;
	
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
	xhr.send("json="+JSON.stringify(maps));
	alert("Map créée");
	//console.log(maps);
	//console.log(JSON.stringify(maps));
	location.reload();
}

function addMap() {
	x = document.getElementsByName("coorX")[0].value;
	y = document.getElementsByName("coorY")[0].value;
	document.getElementById("boutons").innerHTML += "<td> <input type=\"button\" value=\""+x+","+y+"\" onclick=\"changeMap("+x+","+y+");\" /> </td>";
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
