var myApp = angular.module('myApp',[]);

myApp.controller('MainCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  $scope.todos = [];
  $scope.textBox = "";

  $scope.addItem = function() {
  	$scope.todos.push($scope.textBox);
  	//console.log($scope.textBox);
  	$scope.textBox = "";
  }

  $scope.deleteItem = function(item) {
  	//console.log(item);
  	var index = $scope.todos.indexOf(item);
  	if (index > -1) {
  		$scope.todos.splice(index, 1);
  	}
  }
}]);