'use strict';

describe('Controller: MbaCtrl', function () {

  // load the controller's module
  beforeEach(module('madebyaliceApp'));

  var MbaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MbaCtrl = $controller('MbaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
