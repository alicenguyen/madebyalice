'use strict';

angular.module('madebyaliceApp')
.controller('ProjectsCtrl', function ($scope, Projects, Photos) {
	$scope.projects =  Projects.query(function(data){ $scope.projects = data; console.log(data);});

	$scope.photos = Photos;
	console.log(Photos);

})

.controller('ProjectsDetailCtrl', function($scope){
	console.log("hi");
});
