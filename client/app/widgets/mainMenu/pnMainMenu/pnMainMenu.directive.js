(function () {
  'use strict';

  angular
    .module('proteinApp')
    .directive('pnMainMenu', pnMainMenu);

  pnMainMenu.$inject = ['$window', 'navigationService'];

  /* @ngInject */
  function pnMainMenu($window, navigationService) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      link: link,
      templateUrl: 'app/widgets/mainMenu/pnMainMenu/pnMainMenu.html',
      restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {

      scope.showMenu = false;

      scope.navigation = navigationService;

      scope.sections = scope.navigation.getSections();

      function toogleOptionsMenu(){
        scope.showMenu = !scope.showMenu;
      }

      function mouseDown(){
        console.log('mouse down');

      }

      function showOptions(){
        scope.showMenu = true;
      };

      function hideOptions(){
        scope.showMenu = false;
      };

      scope.showOptions = showOptions;
      scope.hideOptions = hideOptions;
      scope.toogleOptionsMenu = toogleOptionsMenu;

    }
  }
})();
