/**
 * Instructions: Implement the login form as a reusable component. There should be
 * one component that shows the current user and one that provides the login form itself (two directives).
 */

var app = angular.module('jsbin', []);

/*
 * Handle our authentication with a service
 */
app.factory('authentication', function () {
  var auth = {};
  auth.login = function (username, password) {
    if (username == null || password == null) return {
      loggedIn: false
    };

    var cleanedUsername = username.trim().toLowerCase();
    if (cleanedUsername == "admin" && password == "password") {
      return {
        user: cleanedUsername,
        loggedIn: true
      };
    } else {
      return {
        loggedIn: false
      };
    }

  };

  return auth;
});

app.controller('DemoCtrl', function ($scope) {
  $scope.loginState = {};
});

app.directive('login', function () {
  return {
    controller: function ($scope, authentication) {
      $scope.loggedIn = false;
      $scope.currentUser = null;
      $scope.login = function (username, password) {
        var result = authentication.login(username, password);
        $scope.loggedIn = result.loggedIn;
        $scope.currentUser = result.user;
      };
    },
    templateUrl: "login.html",
    scope: {
      'currentUser': '=currentUser',
      'loggedIn': '=loggedIn',
      'formName': '@name'
    }
  };
});

app.directive('user', function () {
  return {
    templateUrl: "currentUser.html",
    scope: {
      'currentUser': '=currentUser',
      'loggedIn': '=loggedIn'
    }
  };
});