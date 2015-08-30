/**
 * Instructions: Fix the code so that updating the list at the top updates the list at the bottom.
 */

var app = angular.module('jsbin', []);

app.controller('DefaultCtrl', function ($scope) {
  $scope.names = [{
    name: 'Foo'
  }, {
    name: 'Bar'
  }, {
    name: 'Baz'
  }];
});