/**
 * Created by Alek on 5/6/2017.
 */
'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('iskconApp')
    .directive('schedule', function () {
        return {
            templateUrl: 'scripts/directives/dashboard/schedule/schedule.html',
            restrict: 'E',
            replace: true,
            scope: {
                'day': '='
            }
        }
    });
