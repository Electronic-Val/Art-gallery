<?php
session_start();
$host = "localhost";
$user = "root";
$pass = "";
$database = "valpoint";

//instantiate new connection 
$conn = new mysqli($host, $user, $pass, $database);

//run the connection 
$conn;
?>