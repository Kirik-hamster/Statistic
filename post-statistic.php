<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$json = file_get_contents('php://input');
$data = json_decode($json, true);
$path = './data.json';
file_put_contents($path, $data);
echo $json;

$json1 = file_get_contents('./data.json');
echo $json1;
$dataArray = json_decode($json1, true);
print_r($dataArray["Path"]);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    echo "Содержимое POST-запроса:<br>";
    foreach ($_POST as $key => $value) {
        echo "$key: $value<br>";
    }
 

} 
$C_size;
$C_elapsed_time;
$C_date;

if ($data) {
    $C_size = $data[0]->SizeInt64;
    $C_elapsed_time = $data[0]->ElapsedTime;
    $C_date = $date[0]->Date;
    postToMySQL($C_size, $C_elapsed_time, $C_date, $conf);
}



require './config.php';



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