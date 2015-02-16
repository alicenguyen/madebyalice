'use strict';

describe('Service: Keywords', function () {

  // load the service's module
  beforeEach(module('madebyaliceApp'));

  // instantiate service
  var Keywords;
  beforeEach(inject(function (_Keywords_) {
    Keywords = _Keywords_;
  }));

  it('should do something', function () {
    expect(!!Keywords).toBe(true);
  });

});
