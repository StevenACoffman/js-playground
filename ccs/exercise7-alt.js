/*
 * Instructions: fix the code below to properly update after the data is received.
 * Try two approaches: $http and $resource
 */

var URL = "http://jsbin.com/kubogi/1.js";
var app = angular.module('jsbin', ['ngResource']);

app.controller('DefaultCtrl', function ($scope, $resource) {
  $scope.getData = function () {
    'use strict';
    var Fruit = $resource(URL);
    //$scope.fruit = Fruit.get();
    //the above line is equivalent to the next few lines
    Fruit.get().$promise.then(function (data) {
      console.log(data);
      $scope.fruit = data;
    });
  };

});