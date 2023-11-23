<?php
session_start(); // Обязательно вызовите session_start() перед любым выводом на экран или отправкой данных клиенту

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userses";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['name'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $hashed_password = $row['password'];
        
        if (password_verify($password, $hashed_password)) {
            $_SESSION['user_id'] = $row['id']; // Установка user_id в сессию, чтобы помнить, что пользователь авторизован
            header("Location: index.html");
            exit();
        } else {
            echo "Неправильный никнейм или пароль";
        }
    } else {
        echo "Неправильный никнейм или пароль";
    }
}

$conn->close();
?>
