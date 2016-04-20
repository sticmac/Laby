//Génération de la map du labyrinthe

//Variables globales
var lines = 10;
var columns = 15;
var lenCase = 0;


function getMapPHP() {
	var xhr = new XMLHttpRequest();
	var json = new Object();
	xhr.open("GET", "./save.php");

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) { //lorsque la requête est prête
			if (xhr.status == 200) {
				json = JSON.parse(xhr.responseText);
			}
			else { console.log("Erreur "+xhr.status); }
		}
	}

	xhr.send();

	return json;
}				

function createGrid() {
	//Création de la table contenant toutes les cases de la grille
	var json = getMapPHP();
	var table = "<table>\n";
	for (var x = 0 ; x < lines ; x++) {
		table += "<tr>\n";
		for (var y = 0 ; y < columns ; y++) {
			table += "<td style='padding: "+lenCase+"px; background-color: "+getBackgroundFromElement()+";' id='"+x+","+y+"'></td>";
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
	createGrid();
}
