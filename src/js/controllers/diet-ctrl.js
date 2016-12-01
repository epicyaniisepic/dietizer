var app = angular.module('main', []);
	app.controller('DietCtrl', function ($scope, $http){
		$http.get('src/js/foods.json').success(function(data) {
		// $scope.countries = data;
		$scope.foods = data;
		});
	});