<!DOCTYPE html>
<html>
  <head>
    <script src="node_modules/web3.js-browser/build/web3.min.js"></script>
	<script src="js/contract.js"></script>
	<script src="js/upload.js"></script>
	<script src="js/connexion.js"></script>


    <meta charset="utf-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
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
                        <a class="nav-link" href="upload.html">Upload</a>
                    </li>
                
                </ul>
            </div>
        </div>
    </nav>
  </header>
  <body>
    <div class="container">
            <!-- zone de connexion --> 
        <h1>Connexion</h1>
			<form action="php/connextion.php" method="GET">
        		<label><b>Nom d'utilisateur</b></label>
        		<input id="username" type="text" placeholder="Entrer le nom d'utilisateur" name="username" required>
				
        		<label><b>address</b></label>
        		<input id="address" type="password" placeholder="Entrer votre address de blockchienne" name="address" required>

        		<input type="submit" id='submit' value='LOGIN'>  
			</form>
            <button onclick="fungetNumber()">connexion à la blockchaine</button>
    </div>
  </body>
</html>
