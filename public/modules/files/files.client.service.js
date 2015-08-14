'use strict';

angular.module('materialApp')
.factory('filesService', ['$http', 'Upload', function($http, Upload){
	var service = {
		listFiles: function() {
			return $http.get('/files');
		},

		getFile: function(fileId) {
			return $http.get('/files/' + fileId);
		},

		uploadFile: function() {

		}
	};

	return service;
}]);
