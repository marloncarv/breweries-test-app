'use strict';

describe('Directive: breweryCard', function () {

  // load the directive's module
  beforeEach(module('brewerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<brewery-card></brewery-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the breweryCard directive');
  }));
});
