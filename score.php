<?php include_once("inc/nav.inc"); 
include_once("inc/score.inc");?>
<!DOCTYPE html>
<html>
<head>
	<title>Laby - Score</title>
	<link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="./css/laby.css" />
</head>
<body>
<?php navbar(); ?>
<div class="container">
	<div class="row">
	<div class="col-md-12">
		<div class="page-header">
		  <h1>Scores des joueurs</h1>
		</div>
		<table id="score" class="table">
		<tr><th>Login</th><th>Score</th></tr>
		<?php displayScores(); ?>
		</table>
	</div>
	</div>
</div>
</body>
</html>
