//Génération de la map du labyrinthe

//Variables globales
var lines = 10;
var columns = 15;
var lenCase = 0;


function createGrid() {
	//Création de la table contenant toutes les cases de la grille
	var table = "<table>\n";
	for (var x = 0 ; x < lines ; x++) {
		table += "<tr>\n";
		for (var y = 0 ; y < columns ; y++) {
			if (x == 0) {
				table += "<td style='padding: "+lenCase+"px; background-color: "+getBackgroundFromElement("wall")+";' class='wall' id='"+x+","+y+"'></td>";
			}
			else {
				table += "<td style='padding: "+lenCase+"px; background-color: "+getBackgroundFromElement()+";' id='"+x+","+y+"'></td>";
			}
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
