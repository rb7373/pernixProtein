'use strict';

angular.module('proteinApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/layout/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainController'
      });
  });
