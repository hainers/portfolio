var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngAnimate']);

portfolioApp.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'homeCtrl'
        })
        .when('/work', {
            templateUrl: 'page-work.html',
            controller: 'workCtrl'
        })
        .when('/about', {
            templateUrl: 'page-about.html',
            controller: 'aboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'page-contact.html',
            controller: 'contactCtrl'
        })
        .otherwise ({ redirectTo: '/' });

   $locationProvider.html5Mode(true);
});
