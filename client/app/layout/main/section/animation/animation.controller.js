(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('AnimationController', AnimationController);

  AnimationController.$inject = ['navigationService'];

  /* @ngInject */
  function AnimationController(navigationService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'AnimationController';
    vm.navigation = navigationService;


    activate();

    ////////////////

    function activate() {

    }



  }
})();
