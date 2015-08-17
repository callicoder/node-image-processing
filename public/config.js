'use strict';

angular.module('materialApp')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('welcome', {
        abstract: true,
        templateUrl: 'modules/common/welcome.client.view.html',        
    })
    .state('welcome.branding', {
        url: '/',
        templateUrl: 'modules/common/branding.client.view.html',
    })
    .state('welcome.login', {
        url: '/login',
        templateUrl: 'modules/users/login.client.view.html',
        controller: 'loginController',
        data: {
            contentClass: 'login-content'
        }
    })
    .state('welcome.register', {
        url: '/register',
        templateUrl: 'modules/users/register.client.view.html',
        controller: 'registerController',
        data: {
            contentClass: 'register-content'
        }
    })
    .state('home', {
        abstract: true,
        templateUrl: 'modules/home/home.client.view.html',
        controller: 'homeController'
    })
    .state('home.files', {
        url: '/files',
        templateUrl: 'modules/files/files.client.view.html',
        controller: 'filesController'
    })
    .state('home.listFiles', {
        url: '/files/list',
        templateUrl: 'modules/files/listFiles.client.view.html',
        controller: 'listFilesController'
    })
    
}]);


angular.module('materialApp')
.run(['$rootScope', function($rootScope) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        if(toState.data && toState.data.contentClass) {
            $rootScope.contentClass = toState.data.contentClass;
        } else {
            $rootScope.contentClass = '';
        }
    });    
}]);
