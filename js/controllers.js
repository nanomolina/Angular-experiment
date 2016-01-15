/* chapter1/controllers.js */

'use strict';
/* Controllers */

var myApp = angular.module('myApp',[]);


// CONTROLLERS
myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

myApp.controller('DoubleController', ['$scope', function($scope) {
  $scope.double = function(val) {
    try {
      var a = val * 2
    } catch(err) {
      var a = 0;
    }
    return a
  };
  $scope.message = 'hola';
}]);

myApp.controller('SpicyController', ['$scope', function($scope) {
  $scope.spice = 'very';
  $scope.spicy = function(val) {
    if (val === undefined) {
      val = 'very';
    }
    $scope.spice = val;
  };
}]);

myApp.controller('ListCtrl', function(messages) {
  var self = this;
  self.messages = messages.list;
});

myApp.controller('PostCtrl', function(messages) {
  var self = this;
  self.new_msg = 'Hello World!'
  self.addMessage = function (msg) {
    messages.add(msg);
    self.new_msg = '';
});

// FACTORY
myApp.factory('messages', function() {
  var messages = {};
  messages.list = [];
  messages.add = function (msg) {
    messages.list.push({id: messages.list.length, text: msg});
  }
  return messages;
});
