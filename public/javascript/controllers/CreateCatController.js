(function() {
	"use strict";
	angular.module('app').controller('CreateCatController', CreateCatController);
	CreateCatController.$inject = ['$state', 'HomeFactory'];
	
	function CreateCatController($state, HomeFactory) {
		var vm = this;
		vm.cat = {};
		vm.submitCat = function() {
			HomeFactory.createCat(vm.cat).then(function() {
				$state.go('Home');
			});
		};
	}
})();