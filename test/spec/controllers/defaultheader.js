'use strict';

describe('Controller: DefaultheaderCtrl', function () {

  // load the controller's module
  beforeEach(module('brewerApp'));

  var DefaultheaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DefaultheaderCtrl = $controller('DefaultheaderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DefaultheaderCtrl.awesomeThings.length).toBe(3);
  });
});
