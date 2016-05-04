<?php
session_start();

function navbar() {
?>
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
<?php
	if(empty($_SESSION) && empty($SESSION['user'])) {?>
                        <ul class="nav navbar-nav navbar-right">
                                <li><a href='login.php'>Log in</a></li>
			</ul>
<?php
	}
	else {?>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#"><?php echo $_SESSION['user']; ?></a></li>
				<li><a href='auth.php?action=logout'>Log out</a></li>
			</ul>
<?php   } ?>
                </div>
</nav>

<?php }?>
