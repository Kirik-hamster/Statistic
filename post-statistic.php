<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$json = file_get_contents('php://input');
$data = json_decode($json, true);
$path = './data.json';

require './config.php';

$C_size = $data["SizeInt64"];
$C_size_string = $data["Size"];
$C_elapsed_time = $data["ElapsedTime"];
$C_path = $data["Path"];
postToMySQL($C_size, $C_elapsed_time, $C_size_string, $C_path, $conf);

function postToMySQL($C_size, $C_elapsed_time, $C_size_string, $C_path, $conf) {
    $conn = new mysqli($conf[0], $conf[1], $conf[2], $conf[3]);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO t_stat (C_size, C_elapsed_time, C_size_string, C_path) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $C_size, $C_elapsed_time, $C_size_string, $C_path);

    if ($stmt->execute()) {
        echo "Данные успешно добавлены.";
    } else {
        echo "Ошибка при добавлении данных: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}


?>