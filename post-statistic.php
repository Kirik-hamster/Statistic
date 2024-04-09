<?php
$json = file_get_contents('php://input');
$data = json_decode($json, true);
echo $data;
if ($json == null) echo 123;


?>