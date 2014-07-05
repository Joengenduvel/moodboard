'use strict';

/**
 * @ngdoc function
 * @name moodboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moodboardApp
 */
angular.module('moodboardApp')
  .controller('MainCtrl', ['$scope', 'FirebaseService', function ($scope, firebase) {
    $scope.happinessLevels = [
        {label: 'Happy', value: 2},
        {label: 'Satisfied', value: 1},
        {label: 'Meh', value: 0},
        {label: 'disappointed', value: -1},
        {label: 'sad', value: -2}
    ];
        $scope.newEntry = {
            comment: 'new comment',
            happiness: $scope.happinessLevels[2]
        };
        firebase.entries.$bind($scope,'entries');
        $scope.add =function(){
            $scope.newEntry.date = new Date();
            firebase.entries.$add($scope.newEntry);
        };
  }]);
