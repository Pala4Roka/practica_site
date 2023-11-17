<?php
$servername = "localhost";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password);
if ($conn->connect_error) {
    die("Connection failed: " . mysqli_connect_error()); 
}

$sql = "CREATE DATABASE users";
if ($conn->query($conn, $sql)===TRUE){
    echo"Создана";

} else{
    echo "Ошибка" . $conn->error;
}

?>