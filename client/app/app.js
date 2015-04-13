'use strict';

angular.module('proteinApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngMdIcons'
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');
        $locationProvider.html5Mode(true);
    });
