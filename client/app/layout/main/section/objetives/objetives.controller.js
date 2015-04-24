(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('ObjectivesController', ObjectivesController);

  ObjectivesController.$inject = ['navigationService'];

  /* @ngInject */
  function ObjectivesController(navigationService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ObjectivesController';
    vm.states = [];
    vm.currentState = [];

    vm.navigation = navigationService;


    activate();

    ////////////////

    function activate() {

    }



  }
})();
