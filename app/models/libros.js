
var app = angular.module('libros', ['ngRoute','angularUtils.directives.dirPagination']);

  
    // Configuraci�n de las rutas
app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'app/views/homes.html'
            
        })
        .when('/listar', {
            templateUrl : 'app/views/listalibros.html',
            controller  : 'muestraLibros'
        })
        .when('/administrar', {
            templateUrl : 'app/views/editalibros.html',
            controller  : 'editarLibros'
        })
        .otherwise({
            redirectTo: '/'
        });
});
      

  