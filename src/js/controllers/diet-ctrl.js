(function() {

	'use strict';	
	angular
		.module('main')
		.controller('DietCtrl', DietCtrl);
	
	DietCtrl.$inject = ['$scope', '$http']

	function DietCtrl($scope, $http) {
		$http.get('foods.json').success(function(data) {
		// $scope.countries = data;
		$scope.foods = data;
		});
	};
})();