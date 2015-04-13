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


      scope.showOptions = function(){
        scope.showMenu=true;
        console.log("Enter");
      };

      scope.hideOptions = function(){
        scope.showMenu=false;
        console.log("Leave");
      };



    }
  }
})();
