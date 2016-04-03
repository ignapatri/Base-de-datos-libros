app.controller('editarLibros', ['$scope', '$http',function($scope,$http){  
    
		$scope.importar = function(){
      $scope.libro =[];       
			$http.get('php/listar.php').success(function(datos){
			$scope.libro = datos;
        
			});
		}

		$scope.importar();    
    $scope.show_form = true;
    $scope.libInfo = {};

    $scope.formToggle = function(){
    $('#empForm').slideToggle();
    $('#editForm').css('display', 'none');
    $('#elimForm').css('display', 'none');

    }
   
    
    $scope.editInfo = function(libr){
    $scope.lib = libr;
    $('#empForm').slideUp();
    $('#editForm').slideToggle();
    $('#elimForm').css('display', 'none');
   };
    
     
    $scope.deleteInfo = function(libr){
    $scope.lib = libr;
    $('#empForm').slideUp();
    $('#elimForm').slideToggle();
    $('#editForm').css('display', 'none');
   
   };

   $scope.cerrareli = function(){
    $('#infoForm').slideToggle();
    $('#elimForm').slideToggle();
    }

        
   $scope.doSort = function(propName) {
     $scope.sortBy = propName;
     $scope.reverse = !$scope.reverse;

      };

  $scope.insertarLibro = function(info){    
    $http.post('php/insertar.php',{"Nombre":info.Nombre,"Autor":info.Autor,"Editorial":info.Editorial,"Ubicacion":info.Ubicacion, "Tematica":info.Tematica}).success(function(data){
   if (data == true) {
    $scope.importar();
    $('#empForm').css('display', 'none');
    $scope.lib = '';
    
   }
 });
 }  

 $scope.UpdateInfo = function(info){
    $http.post('php/actualizar.php',{"Id_libros":info.Id_libros,"Nombre":info.Nombre,"Autor":info.Autor,"Editorial":info.Editorial,"Ubicacion":info.Ubicacion, "Tematica":info.Tematica}).success(function(data){
    $scope.show_form = true;
    if (data == true) {
    $scope.importar();
    }
 });
 }

 $scope.updateMsg = function(emp_id){
    $('#editForm').css('display', 'none');
    }

$scope.eliminaLibro = function(info){
    $http.post('php/eliminar.php',{"Id_libros":info.Id_libros}).success(function(data){
    if (data == true) {
    $scope.importar();
    $('#elimForm').slideToggle();
    }
    });
  }


}]);

