'use strict';
angular.module('madebyaliceApp')
.controller('AdminCtrl', function ($scope, Projects) {
	$scope.showAddForm = false;
	$scope.tables= [
		{name: 'projects', disable: false, fields: [{key: 'name', value:''}, {key:'type', value:''}, {key:'description', value:''}]},
		{name: 'images', disable: true, fields: [{key: 'name', value:''}, {key:'type', value:''}, {key:'description', value:''}]},
		{name: 'artwork', disable:true, fields: [{key: 'name', value:''}, {key:'type', value:''}, {key:'description', value:''}]}
	];
	$scope.selectedTable =  $scope.tables[0];
	$scope.project= new Projects
	$scope.projects =  Projects.query(function(data){ $scope.projects = data; console.log(data);});

	$scope.addProject = function() {

		Projects.save( $scope.project, function(data) {
			Projects.query(function(data){ $scope.projects = data; console.log(data);
				$scope.showAddForm= false;
			});
		}, function(err){console.log(err);});
	}

	$scope.deleteProject = function (_id) {
		Projects.remove({projId: _id}, function(data){
			console.log(data);
			Projects.query(function(data){ $scope.projects = data; console.log(data);});
		})
	};

	$scope.editProject = function(_id) {
		$scope.showAddForm = true;
		$scope.project = Projects.get({projId:_id}, function() {
			$scope.updateProject =  function() {
				$scope.project.$update();
				$scope.showAddForm = true;

			}
		});
	}

	}
	);
