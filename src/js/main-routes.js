(function() { 

	'use strict';
	angular
		.module('main')
		.config(function($stateProvider, $urlRouterProvider) {


		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state('ultimate', {
				url: '/ultimate',
				templateUrl: 'src/html/ultimate.html',
				// template: '<div layout-padding> <h1> Ultimate Optimizer </h1> </div>',
				// controller: function($scope) {}
				controller: 'UltCtrl'
			})
			.state('diet', {
				url: '/diet',
				templateUrl: 'src/html/diet.html',
				controller: 'DietCtrl'
				// template: '<div layout-padding> <h1> Dietizer </h1> </div>',
				// controller: function($scope) {}
			})
			.state('about', {
				url: '/about',
				templateUrl: 'src/html/about.html',
				// template: '<div layout-padding> <h1> About </h1> </div>',
				// controller: 'TodoCtrl'
				controller: function($scope) {}
			})
			.state('references', {
				url: '/references',
				// templateUrl: 'src/html/references.html',
				template: '<div layout-padding> <h1> References </h1> </div>',
				// controller: 'TodoCtrl'
				controller: function($scope) {}
			})
		});
})();