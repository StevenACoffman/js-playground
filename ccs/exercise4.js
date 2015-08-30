/**
 * Instructions: Print a random number between 1 and 10
 * whenever "Generate New" is clicked.
 * Use the provided "random" service
 */
var app = angular.module('jsbin', []);

app.factory('random', function () {
  var randomService = {};
  randomService.nextInt = function () {
    return Math.floor((Math.random() * 10) + 1);
  };

  return randomService;
});

app.controller('DefaultCtrl', function ($scope, random) {
  $scope.randomNumber = 42;
  $scope.randomService = random;
  $scope.doAssignment = function () {
    $scope.randomNumber = $scope.randomService.nextInt();

  };

});