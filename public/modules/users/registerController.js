'use strict';
angular.module('materialApp')
.controller('registerController', ['$scope', 'security', function($scope, security){
	$scope.user = {};

	$scope.register = function() {

		security.register($scope.user)
		.success(function(data){

		}).error(function(err){

		});
	};

}]);
