'use strict';

angular.module('materialApp')
.controller('categoryController', ['$scope', '$stateParams', function($scope, $stateParams){
		if($stateParams.categoryId) {
			$scope.parentCategory = $stateParams.categoryId;
		}
}]);
