<?php

class conectar {

   public function conectando (){

   	  $host = "localhost";
   	  $usuario = "Patricia";
   	  $password = "Nachito";
   	  $db = "libros";
   	  $con = mysqli_connect("localhost", "Patricia", "Nachito", "libros");
      return $con;
   }

}

class libros {

  private $libro = array();

    public function todoslibros () {
        $select = new conectar();
        $seleccion = $select->conectando();
        $query = "SELECT * from libros";
        $result = mysqli_query($seleccion, $query);
        $arr = array();
        if(mysqli_num_rows($result) != 0) {
          while($row = mysqli_fetch_assoc($result)) {
              $arr[] = $row;
          }
        }
      echo $json_info = json_encode($arr);
   }

     public function insertar_libro ($Nombre, $Autor, $Editorial, $Ubicacion, $Tematica){
      $select = new conectar();
      $seleccion = $select->conectando();
      $sql = "INSERT INTO libros (Nombre, Autor, Editorial, Ubicacion, Tematica)
            values('$Nombre', '$Autor', '$Editorial', '$Ubicacion', '$Tematica')";
      mysqli_query($seleccion, $sql);
      echo true;        
  }

   public function actualizar($Id_libros, $Nombre, $Autor, $Editorial, $Ubicacion, $Tematica){
     $select = new conectar ();
     $seleccion = $select->conectando();
     $sql = "UPDATE libros SET Nombre = '$Nombre', Autor ='$Autor', Editorial = '$Editorial', Ubicacion = '$Ubicacion' WHERE Id_libros = $Id_libros";
     mysqli_query($seleccion, $sql);
     echo true;
      
   }

   public function eliminar_libro ($id){
         $select = new conectar ();
         $seleccion = $select->conectando();
         $sql = "DELETE FROM libros WHERE id_libros = '$id'";
         mysqli_query($seleccion, $sql);
         echo true;
      }

   }