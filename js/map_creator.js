//Editeur de carte

//Variables globales
var lines = 10;
var columns = 15;
var lenCase = 0;
var selectedCaseX = 0;
var selectedCaseY = 0;
var currentMap = [0,0];

function createGrid() {
	//Création de la carte vide
	var table = "<table>\n";
	for (var y = 0 ; y < lines ; y++) {
		table += "<tr>\n";
		for (var x = 0 ; x < columns ; x++) {
			table += "<td class=\"ground\" onclick=\"selectCase("+x+", "+y+");\" style='padding: "+lenCase+"px;' id='"+x+","+y+"'></td>";
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
	
}

function addMap() {
	x = document.getElementsByName("coorX")[0].value;
	y = document.getElementsByName("coorY")[0].value;
	document.getElementById("boutons").innerHTML += "<td> <input type=\"button\" value=\""+x+","+y+"\" onclick=\"changeMap();\" /> </td>";
}

function changeMap() {
	
}

function go() {
	changeSizes();
	createGrid();
	setInterval(update, 100);
}
