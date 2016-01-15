/* chapter1/app.js excerpt */
'use strict';
/* App module */

var myApp = angular.module('myApp', []);

var fun1 = function($scope) {
	$scope.greeting = 'Hola';
};

myApp.controller('GreeetingController', [$scope, function($scope) {

}]);
