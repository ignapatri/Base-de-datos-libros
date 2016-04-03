<?php include('clases.php');
$data = json_decode(file_get_contents("php://input")); 
// Escaping special characters from submitting data & storing in new variables.
$conexion = new Conectar;
$con = $conexion->conectando();
$Id_libros = mysqli_real_escape_string($con, $data->Id_libros);
$libros = new libros();
$datos = $libros->eliminar_libro($Id_libros);
?>