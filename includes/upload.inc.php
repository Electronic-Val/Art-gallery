<?php
include("../classes/file_system.class.php");
//instantiate class....pass in (in the exact order) hostname, username, password and database name.
$gallery = new Filess ("localhost", "root", "", "valpoint");

//call upload method
$gallery->image_upload ();