angular.module('materialApp')
.controller('headerController', ['$scope', function($scope){


}])
.directive('materialNiceScroll', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).niceScroll({
        		cursorcolor: "rgba(0, 0, 0, 0.4)",
        		cursorwidth: "6px",
        		cursorborder: "none",
        		cursorborderradius: "0px"
    		});
		}
	}
})
.directive('materialSideNav', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).sideNav({
        		menuWidth: 250
    		});
		}
	}
}).directive('materialCollapsible', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$(element).collapsible();
		}
	}
}).directive('materialFileInput', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var path_input = $(element).find('input.file-path');
      		$(element).find('input[type="file"]').change(function () {
      			console.log($(this)[0]);
        		path_input.val($(this)[0].files[0].name);
        		path_input.trigger('change');
      		});
		}
	}
}).directive('materialSelect', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.material_select();
		}
	}
}).directive('materialDropdown', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.dropdown({
      			inDuration: 300,
      			outDuration: 225,
      			constrain_width: false, // Does not change width of dropdown to that of the activator
      			gutter: 0, // Spacing from edge
      			belowOrigin: true // Displays dropdown below the button
    		});
		}
	}
});