(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		o.cats = [];

		//gets an individual cat
		o.getCat = function(id) {
			var q = $q.defer();
			$http.get('/cats/' + id).success(function(res) {
				q.resolve(res);
			}).error(function() {
				q.reject();
			});
			return q.promise;
		}
		o.getCats = function() {
			$http.get('/cats').success(function(res) {
				o.cats.push.apply(o.cats, res); 
				//pushing res array into the cats array without changing memory index
				//can also use a promise to do this
				console.log(res);
			})
		}
		o.createCat = function(cat) {
			var q = $q.defer();
			$http.post('/cats', cat).success(function(res) {
				cat._id = res.name;
				o.cats.push(cat);
				q.resolve();
			});
			return q.promise;
		}

		o.deleteCat = function(cat) {
			$http.delete('/cats/' + cat._id).success(function(res) {
				o.cats.splice(o.cats.indexOf(cat), 1);
			});
		}
		o.getCats();
		/*
		//Music
		o.getMusic = function() {
			$http.get('/list').success(function(res) {
				console.log(res)
			})
		}

		o.createMusic = function(songs) {
			$http.post('/list', songs).success(function(res) {
				console.log(res);
			})
		};

		o.getMusic();

		//Teams
		o.getTeam = function() {
			$http.get('/conference').success(function(res) {
				console.log(res)
			})
		};

		o.createTeam = function(teams) {
			$http.post('/conference', teams).success(function(res) {
				console.log(res)
			})
		};

		o.getTeam();

		 o.getDogs = function() {
			$http.get('/dogs').success(function(res) {
				console.log(res);
			})
		}
		o.getDogs(); */

		return o;
	}
})();