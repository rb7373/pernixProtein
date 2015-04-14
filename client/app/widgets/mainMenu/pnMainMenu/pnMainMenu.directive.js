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
      scope.mouseEnter = false;

      scope.navigation = navigationService;

      scope.sections = scope.navigation.getSections();

      function mouseDown(){
        console.log('mouse down');

      }

      function showOptions(){
        scope.showMenu = true;
        scope.mouseEnter = true;
        console.log("Enter");
      };

      function hideOptions(){
        scope.showMenu = false;
        scope.mouseEnter = false;
        console.log("Leave");
      };

      scope.mouseDown = mouseDown;
      scope.showOptions = showOptions;
      scope.hideOptions = hideOptions;

    }
  }
})();
