(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('MainController', MainController);

  MainController.$inject = ['navigationService','$mdMedia', '$scope'];

  /* @ngInject */
  function MainController(navigationService, $mdMedia, $scope) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.states = [];
    vm.currentState = [];

    vm.navigation = navigationService;

    activate();

    ////////////////

    function activate() {
      vm.title = navigationService.getCurrentStateTitle();
      vm.screenIsSmall = $mdMedia('sm');
    }

    $scope.$watch(function() { return $mdMedia('sm'); }, function(sm) {
      vm.screenIsSmall = sm;
    });
  }
})();
