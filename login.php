<?php
    $username = $_POST['Username'];
    $password = $_POST['Password'];

    // database connection
    $con = new mysqli("localhost", "root", "", "user");
    if($con->connect_error){
        die("failed to connect: ".$con->connect_error);
    }
    else{
        $stmt = $con->prepare("select * from registration where Username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows>0){
        $data = $stmt_result->fetch_assoc();
        if($data['Password'] === $password){
            header('Location: client.html');
        }else{
            echo "Invalid Username or Password";
        }
     }else{
         echo "Invalid Username or Password";
     }
}
?>

