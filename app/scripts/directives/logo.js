'use strict';

var app = angular.module('thaisMartins');
app.directive('logo', function () {
	 return {
	 	templateUrl: 'components/logo.html',
	 	restrict : 'E'
	 };
});