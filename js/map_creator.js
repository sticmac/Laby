//Editeur de carte

//Variables globales
var lines = 10;
var columns = 15;
var lenCase = 0;
var selectedCaseX = 0;
var selectedCaseY = 0;
var currentMap = [0,0];
var maps = [];

function createGrid(mapX, mapY) {
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
			elt.style["background-color"] = getBackgroundFromElement(elt.classList[0]);
		}
	}
}

function sendMap() {
	
}

function addMap() {
	x = document.getElementsByName("coorX")[0].value;
	y = document.getElementsByName("coorY")[0].value;
	document.getElementById("boutons").innerHTML += "<td> <input type=\"button\" value=\""+x+","+y+"\" onclick=\"changeMap("+x+","+y+");\" /> </td>";
}

function changeMap(x, y) {
	saveMap();
	currentMap = [x, y];
	createGrid(x, y);
}

function saveMap() {
	for (var y = 0 ; y < lines ; y++) {
		for (var x = 0 ; x < columns ; x++) {
			maps[currentMap[0]][currentMap[1]][x][y] = document.getElementById(x+","+y).className;
		}
	}
}

function go() {
	changeSizes();
	maps[0][0] = [columns][lines];
	createGrid(0,0);
	setInterval(update, 100);
}
