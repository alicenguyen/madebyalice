'use strict';

angular.module('madebyaliceApp')
.controller('ProjectsCtrl', function ($scope, Projects) {
	$scope.message = 'Hello';
	$scope.projects =  Projects.query(function(data){ $scope.projects = data; console.log(data);});


});
