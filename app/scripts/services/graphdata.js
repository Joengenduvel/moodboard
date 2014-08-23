'use strict';

/**
 * @ngdoc service
 * @name moodboardApp.graphData
 * @description
 * # graphData
 * Service in the moodboardApp.
 */
angular.module('moodboardApp')
  .service('GraphData', ['$filter', function ($filter) {
    return {
        convert: function(data){
            var convertedData = [];
            for(var index = 0; index < data.length; index++){
                convertedData[index] = {};
                convertedData[index].x = $filter('date')(data[index].date, 'yyyy-MM-dd');
                convertedData[index].y = (angular.isUndefined(data[index].happiness))? null: data[index].happiness.value;
                convertedData[index].index = data[index].index;
            }
            return convertedData;
        }
    };
  }]);
