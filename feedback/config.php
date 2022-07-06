<?php
ob_start(); 


$con = mysqli_connect("localhost", "root", "", "feedback"); 

if(mysqli_connect_errno()) 
{
	echo "Failed to connect: " . mysqli_connect_errno();
}

?>