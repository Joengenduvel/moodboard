'use strict';

describe('Service: graphData', function () {

  // load the service's module
  beforeEach(module('moodboardApp'));

  // instantiate service
  var graphData;
  beforeEach(inject(function (_GraphData_) {
    graphData = _GraphData_;
  }));

  it('should do something', function () {
    expect(!!graphData).toBe(true);
  });
});
