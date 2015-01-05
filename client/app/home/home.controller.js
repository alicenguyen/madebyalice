'use strict';

angular.module('madebyaliceApp')
.controller('HomeCtrl', function ($scope) {
	$scope.categories = [
		{'title': 'home'},
		{'title': 'projects'},
		{'title': 'gallery'},
		{'title': 'about'}
	];



});
