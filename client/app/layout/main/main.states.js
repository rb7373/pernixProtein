(function() {
  'use strict';
  var app = angular.module('proteinApp');

  app.config(states);

  function states($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider

      .state('main', {
        url: '/main',
        templateUrl: 'app/layout/main/main.html',
        controller: 'MainController as mainController'
      });

  }

})();
