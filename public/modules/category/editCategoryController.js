angular.module('materialApp')
.controller('editCategoryController', ['$scope', '$stateParams', function($scope, $stateParams){
		if($stateParams.categoryId) {
			$scope.parentCategory = $stateParams.categoryId;
		}

		$scope.editCategory = function() {
			console.log($scope.categoryName);
		};
}])