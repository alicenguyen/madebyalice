'use strict';

describe('Controller: GithubCtrl', function () {

  // load the controller's module
  beforeEach(module('madebyaliceApp'));

  var GithubCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GithubCtrl = $controller('GithubCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
