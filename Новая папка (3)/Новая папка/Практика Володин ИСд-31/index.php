<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userses";
$conn = mysqli_connect($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . mysqli_connect_error()); 
}
$sql = "CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
)";
if ($conn->query($sql) === TRUE) {
    echo "Есть таблица";
} else "Ошибка" . $conn->error
?>