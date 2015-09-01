(function() {
	"use strict";
	angular.module('app').controller('EditCatController', EditCatController);
	EditCatController.$inject = ['$state', '$stateParams', 'HomeFactory'];
	
	function EditCatController($state, $stateParams, HomeFactory) {
		var vm = this;
		//if there is no id in the url, redirect to home
		if(!$stateParams.id) $state.go('Home');
		
		HomeFactory.getCat().then(function(res) {
			//q.resolve()
			vm.cat = res;
			vm.catCopy = angular.copy(res); //creates a copy of the cat so we can edit vm.cat and not change this "original" cat
		}, function() { 
			//q.reject()
			$state.go('Home');
		});
		
		vm.submitCat = function() {
			
		}
	}
})();