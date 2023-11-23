<?php
// Подключение к базе данных (замените данными вашей БД)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "use";

// Создание подключения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получение данных из формы авторизации
$name = $_POST['name'];
$password = $_POST['password'];

// Поиск пользователя в базе данных
$sql = "SELECT * FROM users WHERE name='$name'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Пользователь найден, проверка пароля
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password_hash'])) {
        // Пароль верный, авторизация успешна
        // Перенаправление на другую страницу после успешной авторизации
        header("Location: ./pages/личный кабинет.html");
        exit(); // Важно завершить выполнение скрипта после перенаправления
    } else {
        echo "Неверный пароль!";
    }
} else {
    echo "Пользователь не найден!";
}

$conn->close();
?>
