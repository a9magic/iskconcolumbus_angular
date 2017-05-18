'use strict';
/**
 * @ngdoc function
 * @name iskconApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iskconApp
 */
angular.module('iskconApp')
    .controller('MainCtrl', function ($scope, $position) {
        check_admin();

        $scope.status = '  ';
    });


