(function () {
  'use strict';

  angular
    .module('proteinApp')
    .directive('pnPractice', pnPractice);

  pnPractice.$inject = ['$window', 'navigationService', '$location'];

  /* @ngInject */
  function pnPractice($window, navigationService, $location) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      link: link,

      templateUrl: 'app/widgets/practice/pn-practice/pn-practice.html',
      restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      scope.navigation = navigationService;

      var section = scope.navigation.getCurrentSectionNumber();

      if (section === 0) {
        $location.path('/');
      }else{
        currentSection = scope.navigation.getCurrentSection(); // TODO uglify dont'n work
        Start();
      }

    }
  }
})();
