(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('MainController', MainController);

  MainController.$inject = ['navigationService'];

  /* @ngInject */
  function MainController(navigationService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'MainController';
    vm.states = [];
    vm.currentState = [];


    activate();

    ////////////////

    function activate() {
      navigationService.loadAll().then(function (data) {
        vm.states = [].concat(data);
        vm.currentState = vm.states[0];
        //console.log(vm.currentState);
      });

    }



  }
})();
