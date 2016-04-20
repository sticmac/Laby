<?php

header("Content-type: text/json");

echo "[{\"x\" : 0 , \"y\" : 0 , \"cases\" : [";
for ($x = 0 ; $x < 15 ; $x++) {
	for ($y = 0 ; $y < 10 ; $y++) {
		echo "{\"x\" : $x , \"y\" : $y , \"nature\" : ";
		if ($x == 0 || $y == 0 || $x == 14 || $y == 9) { echo "\"wall\""; }
		else { echo "\"\""; }
		echo "}";
		if ($x != 14 || $y != 9) { echo ", "; }
	}
}
echo "]}";
echo "]";
?>
