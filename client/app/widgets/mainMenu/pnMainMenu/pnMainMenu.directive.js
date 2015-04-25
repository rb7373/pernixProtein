(function () {
  'use strict';

  angular
    .module('proteinApp')
    .directive('pnMainMenu', pnMainMenu);

  pnMainMenu.$inject = ['$window', 'navigationService', '$document', '$mdMedia'];

  /* @ngInject */
  function pnMainMenu($window, navigationService, $document, $mdMedia) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      scope: {
        closeOnLeave: '=',
        closeOnClickOutSide: '='
      },
      link: link,
      templateUrl: 'app/widgets/mainMenu/pnMainMenu/pnMainMenu.html',
      restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {

      element.bind('click', function(event) {
        event.stopPropagation();
      });

      $document.bind('click', function(){
        if (scope.closeOnClickOutSide){
          scope.hideOptions();
        }
        scope.$apply();
      });

      scope.showMenu = false;

      scope.navigation = navigationService;

      scope.sections = scope.navigation.getSections();

      function toogleOptionsMenu(){
        scope.currentIcon = scope.currentIcon == 'add' ? 'remove' : 'add';
        scope.showMenu = !scope.showMenu;
        scope.currentSubSection = -1;
      }

      function showOptions(){
        scope.showMenu = true;
        scope.currentIcon = 'remove';
        scope.currentSubSection = -1;
      };

      function hideOptions(){
        scope.showMenu = false;
        scope.currentIcon = 'add';
        scope.currentSubSection = -1;
      };

      function closeOnLeaveMouse(){
        if (!!scope.closeOnLeave){
          hideOptions();
        }
      }

      function updateCurrentSubSection(index){
        scope.currentSubSection = scope.currentSubSection != index ? index : -1;
      }

      function isSelectedSubSection(index){
        return scope.currentSubSection === index;
      }

      function selectOption(sectionIndex, subSectionIndex){
        console.log('Section: ' + sectionIndex + ' subSection: ' + subSectionIndex);
        scope.navigation.setCurrentSectionState(sectionIndex, subSectionIndex);
      }

      function introduction(){
        scope.selectOption(-1, -1);
      }

      scope.showOptions = showOptions;
      scope.hideOptions = hideOptions;
      scope.toogleOptionsMenu = toogleOptionsMenu;
      scope.currentIcon = 'add';
      scope.currentSubSection = -1;
      scope.updateCurrentSubSection = updateCurrentSubSection;
      scope.isSelectedSubSection = isSelectedSubSection;

      scope.widthMenu = 'inherit';
      scope.closeOnLeaveMouse = closeOnLeaveMouse;
      scope.selectOption = selectOption;
      scope.introduction = introduction;

      scope.screenIsSmall = $mdMedia('sm');

    }
  }
})();
