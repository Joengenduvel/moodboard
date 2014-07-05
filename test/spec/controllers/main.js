'use strict';

describe('Controller: MainCtrl', function () {


    // load the firebase's module
    beforeEach(module('firebase'));
  // load the controller's module
  beforeEach(module('moodboardApp'));

  var MainCtrl,
    scope,
      firebaseService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    firebaseService = {
        entries:{
            $bind: function(objectToBind, nameOfObject){

            }
        }
    };

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
        FirebaseService: firebaseService
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });


});
