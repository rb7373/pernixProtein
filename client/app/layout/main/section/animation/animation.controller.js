(function () {
  'use strict';

  angular
    .module('proteinApp')
    .controller('AnimationController', AnimationController);

  AnimationController.$inject = ['navigationService', '$window', '$scope', '$location', '$mdMedia'];

  /* @ngInject */
  function AnimationController(navigationService, $window, $scope, $location, $mdMedia) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'AnimationController';
    vm.navigation = navigationService;

    vm.previosWidthVideo = 0;

    activate();

    ////////////////

    function getWidthVideo() {
      var width = $window.innerWidth - 50;
      var height = $window.innerHeight - 80;
      width = width - 300 > height ? height : width;
      return width;
    }

    function getHeightVideo() {
      var height = $window.innerHeight - 80;
      return height;
    }

    var win = angular.element($window);
    win.bind("resize", function (e) {
      $scope.$apply();
    })

    function activate() {
      var section = vm.navigation.getCurrentSectionNumber();

      if (section === 0) {
        $location.path('/');
      }

      vm.previosWidthVideo = $window.innerWidth;

      vm.screenIsSmall = $mdMedia('sm');

    }

    $scope.$watch(function () {
      return $mdMedia('sm');
    }, function (sm) {
      vm.screenIsSmall = sm;
    })

    vm.getWidthVideo = getWidthVideo;
    vm.getHeightVideo = getHeightVideo;


  }
})();
