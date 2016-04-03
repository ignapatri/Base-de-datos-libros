app.controller('muestraLibros', ['$scope', '$http',function($scope,$http){

		$scope.importar = function(){
      $scope.libro =[];
       
			$http.get('php/listar.php').success(function(datos){

				$scope.libro = datos;
        
			});
		}

		$scope.importar();
    $scope.formToggle =function(){
      $('#infoForm').css('display', 'none');
      }
   
    $scope.lib = {};
    $scope.Info = function(libr){
    $scope.lib= libr;
    $('#infoForm').slideToggle();
    }

    $scope.cerrar = function(){
    $('#infoForm').slideToggle();
    }

      $scope.doSortest = function(Name) {
      $scope.sortBy = Name;
      $scope.reverse = !$scope.reverse;

      };            


  }]);

