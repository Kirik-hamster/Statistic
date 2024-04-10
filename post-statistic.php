<?php


$json = file_get_contents('php://input');
$data = json_decode($json, true);
echo $data;
if ($json == null) echo 123;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

?>