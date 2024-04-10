<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$json = file_get_contents('php://input');
$data = json_decode($json, true);
echo $data;
if ($json == null) echo 123;





$C_size = 9;
$C_elapsed_time = 9;
$C_date = "2009-01-01 09:01:01";

require './config.php';

//postToMySQL($C_size, $C_elapsed_time, $C_date, $conf);

function postToMySQL($C_size, $C_elapsed_time, $C_date, $conf) {
    $conn = new mysqli($conf[0], $conf[1], $conf[2], $conf[3]);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO t_stat (C_size, C_elapsed_time, C_date) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $C_size, $C_elapsed_time, $C_date);

    if ($stmt->execute()) {
        echo "Данные успешно добавлены.";
    } else {
        echo "Ошибка при добавлении данных: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}


?>