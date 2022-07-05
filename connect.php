<?php
    $Username = $_POST['Username'];
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];
    $confirmPassword = $_POST['confirmPassword'];

    //Database Connection

    $conn = new mysqli('localhost', 'root', '', 'user');
    if($conn->connect_error){
        die('Connection Failed: '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into registration (Username, Email, Password, confirmPassword) values(?,?,?,?)");
        $stmt->bind_param('ssss' ,$Username, $Email, $Password, $confirmPassword);
        $stmt->execute();
        // echo "registeration Successfully...";
        header("Location: final.html");
        $stmt->close();
        $conn->close();
    }
?>