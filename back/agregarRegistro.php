<?php

  include('database.php');
  if(isset($_POST['name'])) {
    $name = $_POST['name'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $direccion = $_POST['direccion'];
    $gustos = $_POST['gustos'];

    $query = "INSERT INTO `registro` (`nombre`, `apellido`, `correo`, `direccion`, `gustos`) VALUES ('$name', '$apellido', '$email', '$direccion', '$gustos')";

    $result = mysqli_query($connection, $query);
    if(!$result) {
        die('Query Failed');
    }
    echo 'Se agrego el dato';
  }

?>