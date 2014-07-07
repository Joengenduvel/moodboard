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
        $scope.highlightedIndex = -1;
        firebase.entries.$bind($scope, 'entries');
        $scope.add = function () {
            $scope.newEntry.date = new Date();
            $scope.newEntry.index = firebase.entries.$getIndex().length;
            firebase.entries.$add($scope.newEntry);
        };
        $scope.graph = {
            data: {
                "xScale": "ordinal",
                "yScale": "linear",
                "main": [
                    {
                        "className": ".pizza",
                        "data": [
                            {
                                "x": "2012-11-05",
                                "y": 6,
                                "index": 0
                            },
                            {
                                "x": "2012-11-06",
                                "y": 6,
                                "index": 1
                            },
                            {
                                "x": "2012-11-07",
                                "y": 8,
                                "index": 2
                            },
                            {
                                "x": "2012-11-08",
                                "y": 3,
                                "index": 3
                            },
                            {
                                "x": "2012-11-09",
                                "y": 4,
                                "index": 4
                            },
                            {
                                "x": "2012-11-10",
                                "y": 9,
                                "index": 5
                            },
                            {
                                "x": "2012-11-11",
                                "y": 6,
                                "index": 6
                            }
                        ]
                    }
                ]
            },
            type: 'line-dotted',
            opts: {
                "dataFormatX": function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
                "tickFormatX": function (x) { return d3.time.format('%A')(x); },
                "mouseover": function (d, i) {
                    $scope.$apply(function() {
                        $scope.highlightedIndex = d.index;
                    });
                },
                "mouseout": function (x) {
                    $scope.$apply(function() {
                        $scope.highlightedIndex = -1;
                    });
                }
            }
        };
    }]);
