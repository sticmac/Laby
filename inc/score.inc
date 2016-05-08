<?php
function displayScores() {
	$xml = simplexml_load_file("./xml/scores.xml");
	$x = $xml->xpath("score");
	foreach ($xml as $score) {
		echo "<tr>";
		echo "<td>$score[login]</td>";
		echo "<td>".(string)$score."</td>";
		echo "</tr>";
	}
}
?>
