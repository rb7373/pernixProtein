(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('ObjectivesController', ObjectivesController);

  ObjectivesController.$inject = ['navigationService', '$location', '$mdMedia', '$scope', '$window'];

  /* @ngInject */
  function ObjectivesController(navigationService, $location, $mdMedia, $scope, $window) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ObjectivesController';

    vm.navigation = navigationService;

    vm.margin = 56;

    ////////////////

    var win = angular.element($window);
    win.bind('resize', function (e) {
      var footerHeight = angular.element(document.querySelector('#footer'))[0].offsetHeight;
      var container = angular.element(document.querySelector('#objectives-container'))[0];
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

      vm.screenIsSmall = $mdMedia('sm');

      var footer = angular.element(document.querySelector('#footer'))[0];

      if (footer){
        var footerHeight = footer.offsetHeight;
        vm.margin = footerHeight;
      }

    }

    $scope.$watch(function() { return $mdMedia('sm'); }, function(sm) {
      vm.screenIsSmall = sm;
    });


    activate();


  }
})();
