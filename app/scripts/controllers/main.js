'use strict';

/**
 * @ngdoc function
 * @name moodboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moodboardApp
 */
angular.module('moodboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
