'use strict';

/**
 * @ngdoc service
 * @name moodboardApp.firebase
 * @description
 * # firebase
 * Service in the moodboardApp.
 */
/* global Firebase */
angular.module('moodboardApp')
    .service('FirebaseService', ['$firebase', function ($firebase) {
        var entries = new Firebase('moodboard.firebaseio.com/entries');
        return {
            entries: $firebase(entries)
        };
    }]);
