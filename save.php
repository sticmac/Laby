<?php

header("Content-type: text/json");

echo "[{\"cases\" : [";
for ($y = 0 ; $y < 10 ; $y++) {
	echo "[";
	for ($x = 0 ; $x < 15 ; $x++) {
		echo "{\"nature\" : ";
		if ($x == 0 || $y == 0 || $x == 14 || $y == 9) { echo "\"wall\""; }
		else { echo "\"\""; }
		echo "}";
		if ($x != 14) { echo ", "; }
	}
	echo "]";
	if ($y != 9) { echo ", "; }
}
echo "]}";
echo "]";
?>
