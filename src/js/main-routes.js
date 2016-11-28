(function() { 

	'use strict';
	angular
		.module('main')
		.config(function($stateProvider, $urlRouterProvider) {


		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state('/', {
				url:'/',
				template: '<div layout-padding> <h1> Landing Page </h1> </div>'
			})
			.state('ultimate', {
				url: '/ultimate',
				// templateUrl: 'assets/views/home.html',
				template: '<div layout-padding> <h1> Ultimate Optimizer </h1> </div>',
				controller: function($scope) {}
			})
			.state('diet', {
				url: '/diet',
				// templateUrl: 'assets/views/todo.html',
				template: '<div layout-padding> <h1> Dietizer </h1> </div>',
				// controller: 'TodoCtrl'
				controller: function($scope) {}
			});
		});
})();