<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Laby</title>
	<script src="js/map.js"></script>
        <link type="text/css" rel="stylesheet" href="./css/bootstrap.min.css" />
</head>
<body onload="go()">
        <nav class ="navbar navbar-default">
                <div class="container-fluid">
                        <div class="navbar-header">
                        <a class="navbar-brand" href="./index.php">Laby</a>
                </div>
                <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                                <li><a href="./labyrinthe.php">Labyrinthe</a></li>
                                <li><a href="./editor.php">Editeur</a></li>
                        </ul>
                </div>
        </nav>

	<div id="laby" class="col-md-8"/>

	<script language="javascript">document.onkeydown = changePos;</script>
</body>
</html>
