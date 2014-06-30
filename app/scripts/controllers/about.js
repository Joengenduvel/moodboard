'use strict';

/**
 * @ngdoc function
 * @name moodboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moodboardApp
 */
angular.module('moodboardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
