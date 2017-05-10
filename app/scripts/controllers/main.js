'use strict';
/**
 * @ngdoc function
 * @name iskconApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iskconApp
 */
angular.module('iskconApp')
  .controller('MainCtrl', function($scope,$position) {
    console.log("MainCtrl");
        check_admin();

      $scope.status = '  ';
      $scope.customFullscreen = false;



      $scope.showPrompt = function(ev) {
          console.log("showPrompt clicked")
          // Appending dialog to document.body to cover sidenav in docs app
          var confirm = $mdDialog.prompt()
              .title('What would you name your dog?')
              .textContent('Bowser is a common name.')
              .placeholder('Dog name')
              .ariaLabel('Dog name')
              .initialValue('Buddy')
              .targetEvent(ev)
              .ok('Okay!')
              .cancel('I\'m a cat person');

          $mdDialog.show(confirm).then(function(result) {
              $scope.status = 'You decided to name your dog ' + result + '.';
          }, function() {
              $scope.status = 'You didn\'t name your dog.';
          });
      };
  });


