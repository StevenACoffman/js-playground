/*
 * Instructions: fix the code below to properly update after the data is received.
 * Try two approaches: $http and $resource
 */

var URL = "http://jsbin.com/kubogi/1.js";
var app = angular.module('jsbin', []);

app.controller('DefaultCtrl', function ($scope, $http) {
  $scope.getData = function () {

    $http.get(URL).success(function (data) {
      $scope.fruit = data;

      console.log("Got data", data);
    });
  };

});