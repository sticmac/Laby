<?php require_once('inc/nav.inc'); ?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Laby</title>
	<script src="js/map.js"></script>
        <link type="text/css" rel="stylesheet" href="./css/bootstrap.min.css" />
        <link type="text/css" rel="stylesheet" href="./css/laby.css" />
</head>
<body onload="go()">
	<?php navbar(); ?>

	<div id="laby" class="col-md-8"/>

	<script language="javascript">document.onkeydown = changePos;</script>

</body>
</html>
