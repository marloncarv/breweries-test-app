'use strict';

describe('Directive: defaultHeader', function () {

  // load the directive's module
  beforeEach(module('brewerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<default-header></default-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the defaultHeader directive');
  }));
});
