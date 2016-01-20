'use strict';
/* Controllers */

var myApp = angular.module('myApp', []);

//CONTROLLERS
var list_todo_ctrl = myApp.controller('ListToDoCtrl', function(messages) {
  var self = this;
  self.messages = messages.list;
  self.new_msg = 'Hello World!';
  self.items_deleted = 0;
  self.items_added = 0;
  self.alert_info = false;
  self.info = '';
  self.added = false;
  self.deleted = false;

  self.addItem = function(msg) {
    messages.add(msg);
    self.alert_info = true;
    self.deleted = false;
    self.added = true;
    self.items_added += 1;
    self.info = self.items_added + ' items added.';
  };

  self.deleteItems = function() {
    var old_num_items = self.messages.length;
    messages.clear();
    self.messages = messages.list;
    var new_num_items = self.messages.length;
    self.items_added = 0;
    self.items_deleted = old_num_items - new_num_items;
    self.alert_info = old_num_items > new_num_items;
    self.info = (self.alert_info ? self.items_deleted + ' items cleaned.' : '');
    self.added = false;
    self.deleted = self.alert_info;
  }
});


// FILTERS
list_todo_ctrl.filter('capitalize', function() {
  return function(text) {
    return text.toUpperCase();
  }
});


// DIRECTIVES
myApp.directive("footer", function() {
  return {
    restrict: "E",
    template: "<div>Hey! This is a directive example.</div>"
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
