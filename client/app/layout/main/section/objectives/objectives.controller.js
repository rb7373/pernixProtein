(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('ObjectivesController', ObjectivesController);

  ObjectivesController.$inject = ['navigationService', '$location'];

  /* @ngInject */
  function ObjectivesController(navigationService, $location) {
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

    }


  }
})();
