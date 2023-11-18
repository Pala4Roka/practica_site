<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";
$conn = mysqli_connect($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . mysqli_connect_error()); 
}
$sql = "CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    nick VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    tel VARCHAR(15) NOT NULL,
    password VARCHAR(100) NOT NULL
)";
if ($conn->query($sql) === TRUE) {
    echo "Есть таблица";
} else "Ошибка" . $conn->error
$username = $_POST['username'];
$nick = $_POST['nick'];
$email = $_POST['email'];
$genre = $_POST['genre'];
$tel = $_POST['tel'];
$password = $_POST['password'];

// Готовим SQL запрос для вставки данных в таблицу users
$sql = "INSERT INTO users (username, nick, email, genre, tel, password) VALUES ('$username', '$nick', '$email', '$genre', '$tel', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Данные успешно сохранены";
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>