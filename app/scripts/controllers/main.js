'use strict';

/**
 * @ngdoc function
 * @name thaisMartins.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thaisMartins
 */
var app = angular.module('thaisMartins');
app.controller('MainCtrl', function ($scope) {
	  
	$scope.menu = [
       { name:'Início', link:'' },
       { name:'Sobre Mim', link:'sobre-mim' },
       { name:'Design', link:'design' },
       { name:'Sites', link:'sites' },
       { name:'Sistemas', link:'sistemas' },
       { name:'Mobile', link:'mobile' },
       { name:'Trabalhos', link:'trabalhos' }
    ];
});
