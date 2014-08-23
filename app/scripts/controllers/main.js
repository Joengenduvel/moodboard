'use strict';

/**
 * @ngdoc function
 * @name moodboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moodboardApp
 */
angular.module('moodboardApp')
    .controller('MainCtrl', ['$scope', 'FirebaseService', 'graphDataService', function ($scope, firebase, graphDataService) {
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

        firebase.entries.$loaded().then(function() {
            console.log("Initial data received!");
            $scope.entries = firebase.entries;
            console.log("graph data: ",  $scope.graphData.main);
            $scope.graphData = {
                "xScale": "ordinal",
                "yScale": "linear",
                "main": [
                    {
                        "className": ".pizza",
                        "data": graphDataService.convert(firebase.entries)
                    }
                ]
            };

            console.log("graph data: ",  $scope.graphData.main);
        });

        $scope.graphData = {
            "xScale": "ordinal",
            "yScale": "linear",
            "main": [
                {
                    "className": ".pizza",
                    "data": [
                        {
                            "x": "2012-11-05",
                            "y": -2,
                            "index": 0
                        },
                        {
                            "x": "2012-11-06",
                            "y": -1,
                            "index": 1
                        },
                        {
                            "x": "2012-11-07",
                            "y": 0,
                            "index": 2
                        },
                        {
                            "x": "2012-11-08",
                            "y": 1,
                            "index": 3
                        },
                        {
                            "x": "2012-11-09",
                            "y": 2,
                            "index": 4
                        }
                    ]
                }
            ]
        };
        $scope.graphType = 'line-dotted';
        $scope.graphOpts = {
            "dataFormatX": function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
            "tickFormatX": function (x) { return d3.time.format('%A')(x); },
            "mouseover": function (d) {
                $scope.$apply(function() {
                    $scope.highlightedIndex = d.index;
                });
            },
            "mouseout": function () {
                $scope.$apply(function() {
                    $scope.highlightedIndex = -1;
                });
            }
        };

        $scope.add = function () {
            $scope.newEntry.date = new Date().toISOString();
            $scope.newEntry.index = $scope.entries.length;
            firebase.entries.$add($scope.newEntry).then(function(){
                $scope.graphData = {
                    "xScale": "ordinal",
                    "yScale": "linear",
                    "main": [
                        {
                            "className": ".pizza",
                            "data": graphDataService.convert(firebase.entries)
                        }
                    ]
                };
            });
        };

    }]);
