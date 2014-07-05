'use strict';

describe('Service: firebase', function () {


    // load the firebase's module
    beforeEach(module('firebase'));
    // load the service's module
    beforeEach(module('moodboardApp'));

  // instantiate service
  var firebaseService;
  beforeEach(inject(function (_FirebaseService_) {
    firebaseService = _FirebaseService_;
  }));

  it('should define mood entries', function () {
    expect(!!firebaseService.entries).toBe(true);
  });

});
