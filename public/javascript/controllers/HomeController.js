(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ["HomeFactory"];

	function HomeController(HomeFactory) {
		var vm = this;
		vm.title = 'Welcome to our App!';
		vm.cats = HomeFactory.cats;
		vm.deleteCat = function(cat) {
			HomeFactory.deleteCat(cat)
		};
		
		vm.createMusic = function(track, artist, album) {
			vm.songs = {};
			vm.songs.track = track;
			vm.songs.artist = artist;
			vm.songs.album = album;
			HomeFactory.createMusic(vm.songs);
		}

		vm.createTeam = function(teamName, city, player) {
			vm.teams = {};
			vm.teams.teamName = teamName;
			vm.teams.city = city;
			vm.teams.player = player;
			HomeFactory.createTeam(vm.teams);
		}
	}
})();