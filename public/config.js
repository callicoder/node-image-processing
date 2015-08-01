angular.module('materialApp')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/orders');
    $urlRouterProvider.when('/settings', '/settings/default');

    $stateProvider
    .state('home', {
        abstract: true,
        templateUrl: 'modules/home/home.tpl.html',
        controller: 'homeController'
    })
    .state('home.activate', {
        url: '/activate',
        templateUrl: 'modules/activate/activate.tpl.html'
    })
    .state('home.dashboard', {
    	url: '/dashboard',
        templateUrl: 'modules/dashboard/dashboard.tpl.html'
    })
    .state('home.order', {
        url: '/orders',
        templateUrl: 'modules/order/order.tpl.html'
    })
    .state('home.orderDetail', {
        url: '/orders/:orderId',
        templateUrl: 'modules/order/orderDetail.tpl.html'
    })
    .state('home.customer', {
        url: '/customers',
        templateUrl: 'modules/customer/customer.tpl.html'
    })
    .state('home.customerDetail', {
        url: '/customers/:customerId',
        templateUrl: 'modules/customer/customerDetail.tpl.html'
    })    
    .state('home.category', {
        url: '/categories',
        templateUrl: 'modules/category/category.tpl.html',
    })
    .state('home.createCategory', {
        url: '/categories/create',
        templateUrl: 'modules/category/createCategory.tpl.html'
    })
    .state('home.editCategory', {
        url: '/categories/edit',
        templateUrl: 'modules/category/editCategory.tpl.html',
        controller: 'editCategoryController'
    })
    .state('home.categoryDetails', {
        url: '/categories/:categoryId',
        templateUrl: 'modules/category/categoryDetails.tpl.html',
        controller: 'categoryController'
    })
    .state('home.product', {
        url: '/products',
        templateUrl: 'modules/product/product.tpl.html'
    })
    .state('home.attribute', {
        url: '/attributes',
        templateUrl: 'modules/attribute/attribute.tpl.html'
    })
    .state('home.design', {
        url: '/design',
        templateUrl: 'modules/design/design.tpl.html'
    })
    .state('home.report', {
        url: '/reports',
        templateUrl: 'modules/report/report.tpl.html'
    })
    .state('home.settings', {
        abstract: true,
        url: '/settings',
        template: '<ui-view></ui-view>'
    })
    .state('home.settings.notifications', {
        url: '/notifications',
        templateUrl: 'modules/settings/notifications/notification.tpl.html'
    })
    .state('home.settings.default', {
        url: '/default'
    })
    .state('home.settings.termsAndConditions', {
        url: '/termsAndConditions'
    })
    .state('home.settings.paymentGateway', {
        url: 'paymentGateway'
    })
    
        
    
}]);
