'use strict';

/**
 * @ngdoc function
 * @name moodboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moodboardApp
 */
angular.module('moodboardApp')
  .controller('MainCtrl', ['$scope', 'Firebase', function ($scope, firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.newEntry = {
            comment: 'new comment'
        };
        firebase.entries.$bind($scope,'entries');
        $scope.add =function(){
            firebase.entries.$add($scope.newEntry);
        };
  }]);
