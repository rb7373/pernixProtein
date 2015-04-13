'use strict';

describe('Directive: pnMainMenu', function () {

  // load the directive's module and view
  beforeEach(module('proteinApp'));
  beforeEach(module('app/widgets/mainMenu/pnMainMenu/pnMainMenu.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pn-main-menu></pn-main-menu>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the pnMainMenu directive');
  }));
});