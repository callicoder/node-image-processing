angular.module('materialApp')
.controller('chatController', ['$scope', 'Socket', function($scope, Socket){
	var socket = io();

	$scope.messages = [];

	$scope.sendMessage = function() {
		console.log($scope.message);
    	Socket.emit('chatMessage', $scope.message);
    	$scope.message = '';
	};

	Socket.on('chatMessage', function(msg){
		$scope.messages.push(msg);
	});

	$scope.$on('$destroy', function() {
        Socket.removeListener('chatMessage');
    })
}])