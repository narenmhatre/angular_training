/**
*  Module
*
* Description
*/
angular.module('hello-world.HelloWorldController', []).
controller('HelloWorldController', ['$scope', function($scope){
	$scope.message = "Hello World!!";
}]);

angular.module('hello-world.UsersController', []).
controller('UsersController', ['$scope', function($scope){
	$scope.users = [ {
		firstName : "Santosh",
		lastName : "Kore",
		isVisible: true
	},
	{
		firstName : "Narendra",
		lastName : "Mhatre",
		isVisible: false
	},
	{
		firstName : "Mayuresh",
		lastName : "Paranjape",
		isVisible: true
	},
	{
		firstName : "Glen",
		lastName : "Noranha",
		isVisible: true
	} 
	];
 


}])

	
 




