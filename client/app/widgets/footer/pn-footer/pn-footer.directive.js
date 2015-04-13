(function () {
    'use strict';

    angular
        .module('proteinApp')
        .directive('pnFooter', pnFooter);

    pnFooter.$inject = ['$window', 'navigationService'];

    /* @ngInject */
    function pnFooter($window, navigationService)
    {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,

            templateUrl: 'app/widgets/footer/pn-footer/pn-footer.html',
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          scope.navigation = navigationService;
        }
    }
})();
