<?php 
include_once("inc/nav.inc"); ?>
<!DOCTYPE html>
<html lang="fr">
<head>
        <title>Laby - Accueil</title>
	<script src="js/map.js"></script>
	<link type="text/css" rel="stylesheet" href="./css/bootstrap.min.css" />
	<link type="text/css" rel="stylesheet" href="./css/laby.css" />
</head>
<body>
<?php navbar(); ?>
<div class="container">
	<div class="row">
		<div id="signedup" class="col-md-offset-3 col-md-6 alert alert-success text-center">
			<strong>Inscription réalisée avec succès. <br /> Vous pouvez maintenant vous connecter.</strong>
		</div>
	</div>
	<div class="row">
		<div id="loggedin" class="col-md-offset-3 col-md-6 alert alert-success text-center">
			<strong>Authentification réussie.</strong>
		</div>
	</div>
</div>
</body>
</html>
