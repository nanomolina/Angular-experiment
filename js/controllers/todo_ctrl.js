'use strict';
/* Controllers */

var myApp = angular.module('myApp', []);

myApp.controller('ListToDoCtrl', function(messages) {
  var self = this;
  self.messages = messages.list;
  self.new_msg = 'Hello World!';
  self.addItem = function(msg) {
    messages.add(msg);
  };
  self.deleteItems = function() {
    messages.clear();
    self.messages = messages.list;
  }

});

// FACTORY
myApp.factory('messages', function() {
  var messages = {};
  messages.list = [{done: false, text: 'prueba'}];
  messages.add = function(msg) {
    messages.list.push({done: false, text: msg});
  }
  messages.clear = function() {
    var list_aux = messages.list;
    messages.list = [];
    angular.forEach(list_aux, function(todo) {
      if (!todo.done) {
        messages.list.push(todo);
      }
    });
  }
  return messages;
});
