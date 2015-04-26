(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('ObjectivesController', ObjectivesController);

  ObjectivesController.$inject = ['navigationService', '$location', '$mdMedia', '$scope'];

  /* @ngInject */
  function ObjectivesController(navigationService, $location, $mdMedia, $scope) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ObjectivesController';

    vm.navigation = navigationService;

    vm.objectives = [];


    activate();

    ////////////////

    function activate() {
      var section = vm.navigation.getCurrentSectionNumber();

      if (section === 0) {
        $location.path('/');
      }

      vm.screenIsSmall = $mdMedia('sm');

    }

    function isReady(){
      return true;
    }

    $scope.$watch(function() { return $mdMedia('sm'); }, function(sm) {
      vm.screenIsSmall = sm;
    });


  }
})();
