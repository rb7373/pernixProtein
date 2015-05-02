(function () {
    'use strict';

    angular
        .module('proteinApp')
        .directive('pnFooter', pnFooter);

    pnFooter.$inject = ['$window', 'navigationService', '$document', '$rootScope'];

    /* @ngInject */
    function pnFooter($window, navigationService, $document, $rootScope)
    {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            scope: {
              useKeyArrow : "="
            },
            templateUrl: 'app/widgets/footer/pn-footer/pn-footer.html',
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          scope.navigation = navigationService;

          function checkKey(event){
            alert(event.keyCode);
          }

          function checkGoTo(keyCode){
            if (keyCode === 39){ // right arrow
              scope.navigation.goNext();
              $rootScope.$apply();

            }else if(keyCode === 37){
              scope.navigation.goPrevious(); // left arroe
              $rootScope.$apply();
            }
          }

          angular.element($document).unbind('keyup');
          $document.bind("keyup", function(event) {
            console.log(scope.useKeyArrow);
            if(scope.useKeyArrow){
              var keyCode = event.keyCode;
              checkGoTo(keyCode);
            }
          });

        }
    }
})();
