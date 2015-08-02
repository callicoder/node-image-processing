'use strict';

angular.module('materialApp')
.controller('loginController', ['$scope', 'security', function($scope, security){
	$scope.user = {};

	$scope.login = function() {
		
		security.login($scope.user)
		.success(function(data){

		}).error(function(err){
			
		});
	};
}]);
