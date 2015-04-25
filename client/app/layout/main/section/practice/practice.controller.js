(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('PracticeController', PracticeController);

  PracticeController.$inject = ['navigationService'];

  /* @ngInject */
  function PracticeController(navigationService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'PracticeController';

    activate();

    ////////////////

    function activate() {

    }



  }
})();
