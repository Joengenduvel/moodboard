'use strict';

describe('Controller: MainCtrl', function () {


    // load the firebase's module
    beforeEach(module('firebase'));
    // load the controller's module
    beforeEach(module('moodboardApp'));

    var MainCtrl,
        scope,
        firebaseService,
        today,
        addedEntry,
        happinessLevels;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        today = new Date();
        firebaseService = {
            entries: {
                $bind: function (objectToBind, nameOfObject) {
                    objectToBind[nameOfObject] = [
                        {
                            index: 0,
                            comment: 'bla',
                            date: today,
                            happiness: 0
                        },
                        {
                            index: 1,
                            comment: 'bla1',
                            date: today,
                            happiness: 1
                        }
                    ];
                },
                $add: function(entry){
                    addedEntry = entry
                },
                $getIndex: function(){
                    return [1,2]
                }
            }
        };

        happinessLevels = [
            {label: 'Happy', value: 2},
            {label: 'Satisfied', value: 1},
            {label: 'Meh', value: 0},
            {label: 'disappointed', value: -1},
            {label: 'sad', value: -2}
        ];

        MainCtrl = $controller('MainCtrl', {
            $scope: scope,
            FirebaseService: firebaseService
        });
    }));

    it('should define a list of mood option', function(){
       expect(scope.happinessLevels).toEqual(happinessLevels);
    });

    it('should set the default happiness to Meh', function(){
        expect(scope.newEntry.happiness).toEqual(happinessLevels[2]);
    });

    it('should attach a list of mood entiries to the scope', function () {
        expect(scope.entries.length).toBe(2);
    });

    describe('when adding an item', function(){

        beforeEach(function(){
            scope.add();
        });

        it('should set the comment', function(){
            expect(addedEntry.comment).toBe(scope.newEntry.comment);
        });

        it('should set the happiness', function(){
            expect(addedEntry.happiness).toEqual(happinessLevels[2]);
        });

        it('should set the date', function(){
            expect(addedEntry.date.getDay()).toBe(today.getDay());
            expect(addedEntry.date.getMonth()).toBe(today.getMonth());
            expect(addedEntry.date.getFullYear()).toBe(today.getFullYear());
        });

        it('should set the index', function(){
            expect(addedEntry.index).toBe(2);
        });
    });
});
