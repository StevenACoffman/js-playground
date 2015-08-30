/**
 * Instructions: Modify the customer directive to make it
 * capable of rendering 'The Best Customer'
 * and 'The Second Best Customer' properly.
 */
var app = angular.module('jsbin', []);

app.directive('customer', function () {
  return {
    template: 'Name: {{customer.name}} Address: {{customer.address}}',
    scope: {
      customer: '=info'
    }
  };
});

app.controller('DefaultCtrl', function ($scope) {
  $scope.customers = [{
    name: 'Larry',
    address: 'Address 1, New York, NY'
  }, {
    name: 'Moe',
    address: 'Address 2, New York, NY'
  }, {
    name: 'Curly',
    address: 'Address 3, New York, NY'
  }, ];

  $scope.theBestCustomer = {
    name: 'The Best Customer',
    address: 'Address 4, New York, NY'
  };
  $scope.theSecondBestCustomer = {
    name: 'The Second Best Customer',
    address: 'Address 5, New York, NY'
  };
});