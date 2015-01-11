'use strict';

angular.module('madebyaliceApp')
.controller('AdminCtrl', function ($scope, Projects) {
	$scope.message = 'Hello';
	$scope.project = {
		name: '',
		type: '',
		description: ''
	};

	$scope.artwork = {};
	$scope.image = {};

	$scope.tables= [
		{name: 'projects', disable: false, model: $scope.project, fields: [{key: 'name', value:''}, {key:'type', value:''}, {key:'description', value:''}]},
		{name: 'images', disable: true, model: $scope.image , fields: [{key: 'name', value:''}, {key:'type', value:''}, {key:'description', value:''}]},
		{name: 'artwork', disable:true, model: $scope.artwork , fields: [{key: 'name', value:''}, {key:'type', value:''}, {key:'description', value:''}]}
	];
	$scope.selectedTable =  $scope.tables[0];

	$scope.addProject = function() {
		var rec = {};
		for(var i in $scope.selectedTable.fields) {
			var key = $scope.selectedTable.fields[i].key;
			var value = $scope.selectedTable.fields[i].value;
			rec[key] = value;
		}

	Projects.save( rec, function(data) {
	}, function(err){console.log(err);});
	
	}

});
