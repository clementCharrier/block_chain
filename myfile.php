<?php 
session_start();
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!--Boostrap-->

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">

    <!--Script JS-->
    <script src="node_modules/web3.js-browser/build/web3.min.js"></script>
    <script src="../node_modules/crypto-js/crypto-js.js"></script>
	<script src="js/contract.js"></script>
	<script src="js/upload.js"></script>
    <script src="js/getfile.js"></script>
    <!--CSS-->
    <title>Ma page de test</title>
  </head>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Projet Blockchain</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="connexion.php">Se connecter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="upload.php">Upload</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="myfile.php">My files</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="annexe.php">Annuaire</a>
                    </li>
                
                </ul>
            </div>
        </div>
    </nav>
  </header>
  <body>
    <?php
    if($_SESSION['username'] == null){
        header('Location: ../connexion.php');
    }
    ?>
    <div class="container">
        <h1>Liste de vos fichiers</h1>
    </div>
    <script>getFile(<?php echo $_SESSION['address']?>)</script>
    <div class="container">
    <table class="table" id="mytable">
        <thead>
            <tr>
                <th scope="col">hash</th>
                <th scope="col">date</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    </div>
  </body>
</html>