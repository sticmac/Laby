<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Laby - Login</title>
	<link type="text/css" rel="stylesheet" href="./css/bootstrap.min.css"/>						
	<link type="text/css" rel="stylesheet" href="./css/laby.css"/>						
</head>
<body>	

<div class="container">
	<div class="row">
		<div id="refused" class="col-md-offset-3 col-md-6 alert alert-dismissible alert-danger text-center">
			<strong>Accès refusé</strong>
		</div>
	</div>
	<div class="row">
	<div class="col-md-6 col-md-offset-3 well">
	<form class="form-horizontal" method='post' action='auth.php'>
		<fieldset>
			<legend>Login</legend>
			<div class="form-group">
				<label for="nom" class="col-lg-3 control-label">Email</label>
				<div class="col-lg-9">
					<input type="text" class="form-control" name="user">
				</div>
			</div>

			<div class="form-group">
				<label for="Mot de passe" class="col-lg-3 control-label">Mot de passe</label>
				<div class="col-lg-9">
					<input type="password" class="form-control" name="password">
				</div>
			</div>

			<div class="form-group">
				<div class="text-center">
					<button type="submit" class="btn btn-primary btn-lg">Connexion</button>
					<button type="reset" class="btn btn-default btn-lg">Annuler</button>
				</div>
			</div>	
		</fieldset>
	</form>
	</div>
	</div>
</div>
</body>
</html>
