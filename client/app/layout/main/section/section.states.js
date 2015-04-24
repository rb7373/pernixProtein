'use strict';

angular.module('proteinApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('section', {
        url: '/section',
        templateUrl: 'app/layout/main/section/objectives.html',
        controller: 'ObjectivesController',
        controllerAs: 'objectivesController'
      });
  });
