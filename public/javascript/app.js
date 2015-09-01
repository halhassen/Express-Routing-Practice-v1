(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('CreateCat', {
			url: '/Cat',
			templateUrl: 'views/create_cat.html',
			controller: 'CreateCatController',
			controllerAs: 'vm'
		}).state('EditCat', {
			url: '/Cat/Edit/:id',
			templateUrl: 'views/create_cat.html',
			controller: 'EditCatController',
			controllerAs: 'vm'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
