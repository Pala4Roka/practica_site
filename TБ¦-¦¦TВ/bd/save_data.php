<?php 
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    nick VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    tel VARCHAR(15) NOT NULL,
    password VARCHAR(100) NOT NULL
);

<?php
$servername = "localhost"; // Имя сервера
$username = "имя_пользователя"; // Имя пользователя
$password = "пароль"; // Пароль
$dbname = "имя_базы_данных"; // Имя базы данных

// Создаем соединение с базой данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Получаем данные из POST запроса
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

?>