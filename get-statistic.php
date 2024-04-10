<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


require './config.php';

$charset = 'utf8mb4';

$dsn = "mysql:host=$servername;dbname=$dbname;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $username, $password, $opt);

    $table = 't_stat';
    $sql = "SELECT * FROM $table";

    $stmt = $pdo->query($sql);

    $results = $stmt->fetchAll();

    $json = json_encode($results, JSON_PRETTY_PRINT);

    header('Content-Type: application/json');

    echo $json;

} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), (int)$e->getCode());
}



?>