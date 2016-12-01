(function() {

	'use strict';	
	angular
		.module('main')
		.controller('UltCtrl', UltCtrl);
	
	UltCtrl.$inject = ['$scope', '$http']

	function UltCtrl($scope) {

		var z, s;

		$scope.clear = function() {
			$scope.objfx = null;
			$scope.constraints = null;
		}

		$scope.submit = function() {
			z = $scope.objfx;
			s = $scope.constraints;
			console.log(z);
			console.log(s);
		}

		$scope.maximize = function() {
			console.log("max");
			$scope.submit();

		}

		$scope.minimize = function() {
			console.log("min");
			$scope.submit();
		}
	}
})();