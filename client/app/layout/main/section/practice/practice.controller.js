(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('PracticeController', PracticeController);

  PracticeController.$inject = ['navigationService', '$location'];

  /* @ngInject */
  function PracticeController(navigationService, $location) {

    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'PracticeController';
    vm.navigation = navigationService;

    activate();

    ////////////////

    function activate() {

    }



  }
})();
