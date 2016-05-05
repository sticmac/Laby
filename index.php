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

	<div class="page-header">
	  <h1>Bienvenue sur Laby</h1>
	</div>
	<div class="row">
	  <div class="col-md-12">
		<p>Salutations jeune joueur, et bienvenue dans Laby.<br/> Es-tu prêt à tenter de sortir le plus vite possible des labyrinthes entièrement fabriqués par le reste de la communauté ? Dans ce cas, depêche-toi de nous rejoindre : inscris-toi et viens jouer !</p>
		<p>Pire encore, si tu es épris d'un élan de sadisme sans nom, tu peux venir créer ta propre carte et défier les autres joueurs à oser venir s'y confronter...</p>
	  </div>
	</div>
</div>
</body>
</html>
