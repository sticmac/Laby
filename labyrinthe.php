<?php require_once('inc/nav.inc'); 

if (empty($_SESSION["user"])) {
	header("Location: login.php"); //Impossible de jouer si deconnecté
	exit;
}?>
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

	<div id="laby" class="col-md-8"></div>
	<div class="col-md-3 well">
		<h3>Inventaire</h3>
		<div id="inventory">
			Clés : 0
		</div>
	</div>

	<script language="javascript">document.onkeydown = changePos;</script>

</body>
</html>
