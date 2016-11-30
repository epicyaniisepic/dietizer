(function() { 

	'use strict';
	angular
		.module('homeRouter')
		.config(function($stateProvider, $urlRouterProvider) {


		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state('home.ultimate', {
				url: '/ultimate',
				// templateUrl: 'src/html/ultimate.html',
				template: '<div layout-padding> <h1> Ultimate Optimizer </h1> </div>',
				controller: function($scope) {}
			})
			.state('home.diet', {
				url: '/diet',
				// templateUrl: 'src/html/diet.html',
				template: '<div layout-padding> <h1> Dietizer </h1> </div>',
				// controller: 'TodoCtrl'
				controller: function($scope) {}
			})
		});
})();