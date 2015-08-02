'use strict';
angular.module('materialApp')
.factory('security', ['$http', function($http) {
	var service = {
		currentUser: null,

		login: function(user) {
			return $http.post('/auth/signin', user);
		},

		register: function(user) {
			return $http.post('/auth/signup', user);
		}
	};
	return service;
}]);
