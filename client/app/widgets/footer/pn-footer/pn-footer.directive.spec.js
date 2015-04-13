'use strict';

describe('Directive: pnFooter', function () {

  // load the directive's module and view
  beforeEach(module('proteinApp'));
  beforeEach(module('app/widgets/footer/pn-footer/pn-footer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pn-footer></pn-footer>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the pnFooter directive');
  }));
});