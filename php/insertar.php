<?php include('clases.php');
$data = json_decode(file_get_contents("php://input")); 
// Escaping special characters from submitting data & storing in new variables.
$conexion = new Conectar;
$con = $conexion->conectando();
$Nombre = mysqli_real_escape_string($con, $data->Nombre);
$Autor = mysqli_real_escape_string($con, $data->Autor);
$Editorial = mysqli_real_escape_string($con, $data->Editorial);
$Ubicacion = mysqli_real_escape_string($con, $data->Ubicacion);
$Tematica = mysqli_real_escape_string($con, $data->Tematica);

$libros = new libros();
$datos= $libros->insertar_libro ($Nombre, $Autor, $Editorial, $Ubicacion, $Tematica)   
?>
