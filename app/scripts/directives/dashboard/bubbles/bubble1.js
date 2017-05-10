'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('iskconApp')
    .directive('bubble1',function() {
        return {
            templateUrl:'scripts/directives/dashboard/bubbles/bubble1.html',
            restrict:'E',
            replace:true,
            scope: {
                'model': '=',
                'comments': '@',
                'number': '@',
                'name': '@',
                'color': '@',
                'details':'@',
                'type':'@',
                'goto':'@'
            }

        }
    });/**
 * Created by a8magic on 4/29/2017.
 */
