<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userses";

// Создание подключения
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Проверка соединения
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    // Хеширование пароля
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Проверка наличия пользователя с таким именем или email в базе данных
    $check_query = "SELECT * FROM users WHERE username = '$username' OR email = '$email'";
    $result = mysqli_query($conn, $check_query);
    if (mysqli_num_rows($result) > 0) {
        // Если найдены совпадающие данные, вывести сообщение об ошибке
        echo "Пользователь с таким именем или email уже существует";
    } else {
        // SQL запрос для вставки данных в таблицу
        $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";

        if (mysqli_query($conn, $sql)) {
            // Если данные успешно добавлены, перенаправляем на другую страницу
            header("Location: index.html");
            exit();
        } else {
            echo "Ошибка: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
}

// Закрытие соединения
mysqli_close($conn);
?>
