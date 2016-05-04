<?php

header("Content-type: text/json");

$xml = simplexml_load_file("xml/maps.xml");
$maps = $xml->xpath("map");
echo (string)$maps[0];
?>
