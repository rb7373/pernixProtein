(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('PracticeController', PracticeController);

  PracticeController.$inject = ['navigationService', '$location', '$window', '$scope'];

  /* @ngInject */
  function PracticeController(navigationService, $location, $window, $scope) {

    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'PracticeController';
    vm.navigation = navigationService;

    vm.margin = 56;



    ////////////////

    var win = angular.element($window);
    win.bind('resize', function (e) {
      var footerHeight = angular.element(document.querySelector('#footer'))[0].offsetHeight;
      var container = angular.element(document.querySelector('#practice_session'))[0];
      if(container){
        vm.margin = footerHeight;
      }
      $scope.$apply();
    })

    function activate() {

      var section = vm.navigation.getCurrentSectionNumber();

      if (section === 0) {
        $location.path('/');
      }

      var footerHeight = angular.element(document.querySelector('#footer'))[0].offsetHeight;

      vm.margin = footerHeight;

    }

    ////////////////////

    activate();



  }
})();
