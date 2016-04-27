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
			table += "<td onclick=\"selectCase("+x+", "+y+");\" style='padding: "+lenCase+"px; background-color: "+getBackgroundFromElement()+";' id='"+x+","+y+"'></td>";
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

function createMap() {
	
}

function changeMap() {
	
}

function go() {
	changeSizes();
	createGrid();
	setInterval(update, 100);
}
