<?php
session_start();
ini_set('display_errors', 'on');
error_reporting(E_ALL);
if(isset($_GET['username']) && isset($_GET['address']))
{
   $username=$_GET['username'];
   $address="'".$_GET['address']."'";
   echo $username;
   echo $password;
   if($username !== "" && $address !== "")
   {
         $_SESSION['username'] = $username;
         $_SESSION['address'] = $address;
         header("Location: ../upload.php");
   }
}
else
{
   header('Location: ../connexion.php');
}
?>  