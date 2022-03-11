<?php

    include('database.php');

    if(isset($_POST['name'])) {

        $name = $_POST['name'];
        $apellido = $_POST['apellido'];
        $email = $_POST['email'];
        $direccion = $_POST['direccion'];
        $telefono = $_POST['telefono'];
        $motivo = $_POST['motivo'];

        $query = "INSERT INTO `contacto` (`nombre`, `apellido`, `email`, `direccion`, `telefono`, `motivo`) VALUES ('$name', '$apellido', '$email', '$direccion', '$telefono', '$motivo')";

        $result = mysqli_query($connection, $query);
        if(!$result) {
            die('Query Failed');
        }
        echo 'Se agrego el dato';
    }

?>