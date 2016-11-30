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
				// template: '<div layout-padding> <h1> Landing Page </h1> </div>'
				template: '<div layout-padding> <h1> Landing / Home </h1> </div>',
			})
			.state('home', {
				url: '/home',
				templateUrl: 'src/html/home.html',
				// template: '<div layout-padding> <h1> Home </h1> </div>',
				// controller: 'TodoCtrl'
				controller: function($scope) {}
			})
			.state('home.ultimate', {
				url: '/ultimate',
				templateUrl: 'src/html/ultimate.html',
				// template: '<div layout-padding> <h1> Ultimate Optimizer </h1> </div>',
				controller: function($scope) {}
			})
			.state('home.diet', {
				url: '/diet',
				templateUrl: 'src/html/diet.html',
				// template: '<div layout-padding> <h1> Dietizer </h1> </div>',
				// controller: 'DietCtrl'
				controller: function($scope) {}
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
				// templateUrl: 'assets/views/todo.html',
				template: '<div layout-padding> <h1> References </h1> </div>',
				// controller: 'TodoCtrl'
				controller: function($scope) {}
			})
		});
})();