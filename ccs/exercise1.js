var app = angular.module('workshop', []);

app.controller('Ex1', ['$scope', function ($scope) {
  $scope.log10 = Math.log;
}]);