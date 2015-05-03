'use strict';

angular.module('proteinApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('animation', {
        url: '/animation',
        templateUrl: 'app/layout/main/section/animation/animation.html',
        controller: 'AnimationController as animationController'
      })

      .state('objectives', {
        url: '/objectives',
        templateUrl: 'app/layout/main/section/objectives/objectives.html',
        controller: 'ObjectivesController as objectivesController'
      })

      .state('practice', {
        url: '/practice',
        templateUrl: 'app/layout/main/section/practice/practice.html',
        controller: 'PracticeController as practiceController'
      })
  });
