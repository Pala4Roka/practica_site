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

// Получение данных из формы
$name = $_POST['name'];
$password = $_POST['password'];
$birthdate = $_POST['birthdate'];

// Хэширование пароля
$password_hash = password_hash($password, PASSWORD_DEFAULT);

// Вставка данных в базу данных
$sql = "INSERT INTO users (name, password_hash, birthdate) VALUES ('$name', '$password_hash', '$birthdate')";

if ($conn->query($sql) === TRUE) {
  // Перенаправление на другую страницу после успешной регистрации
  header("Location: index.html");
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
