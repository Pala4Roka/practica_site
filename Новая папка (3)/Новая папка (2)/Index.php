<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "use";
$conn = mysqli_connect($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . mysqli_connect_error()); 
}
$sql ="CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL
)";
if ($conn->query($sql) === TRUE) {
    echo "Есть таблица";
} else "Ошибка" . $conn->error
?>