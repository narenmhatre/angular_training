/**
*  Module
*
* Description
*/
angular.module('hello-world.HelloWorldController', []).
controller('HelloWorldController', ['$scope', function($scope){
	$scope.message = "Hello World!!";
}]);

angular.module('hello-world.users', []).
controller('UsersController', ['$scope', function($scope){
	$scope.users = ["Santosh", "Naren", "Glen", "Mayuresh"];
}])

