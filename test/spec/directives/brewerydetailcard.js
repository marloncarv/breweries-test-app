'use strict';

describe('Directive: breweryDetailCard', function () {

  // load the directive's module
  beforeEach(module('brewerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<brewery-detail-card></brewery-detail-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the breweryDetailCard directive');
  }));
});
