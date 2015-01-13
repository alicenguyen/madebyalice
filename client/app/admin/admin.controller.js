'use strict';

angular.module('madebyaliceApp')
.controller('AdminCtrl', function ($scope, Projects) {
	$scope.showAddForm = false;
	$scope.tables= [
		{name: 'projects', disable: false},
		{name: 'images', disable: true},
		{name: 'artwork', disable:true}
	];
	$scope.selectedTable =  $scope.tables[0];

	$scope.project= new Projects();

	$scope.projects =  Projects.query(function(data){ $scope.projects = data; console.log(data);});
	
	$scope.types = ['Web', 'iOS', 'Android', 'Systems'];
	$scope.selectedType = ''; 

	$scope.addProject = function() {
		$scope.project = new Projects();
		$scope.saveProject = function(){
			$scope.project.$save( function() {
				Projects.query(function(data){ $scope.projects = data; console.log(data);
					$scope.showAddForm= false;
				});
			}, function(err){
			});
		};
	};

	$scope.deleteProject = function (_id) {
		Projects.remove({projId: _id}, function(data){
			console.log(data);
			Projects.query(function(data){ $scope.projects = data; console.log(data);});
		});j
	};

	$scope.editProject = function(_id) {
		$scope.showAddForm = true;

		Projects.get({projId:_id}, function(project){
			$scope.project = project;

			$scope.saveProject= function() {
				$scope.project.type = $scope.selectedType;
				console.log('saving...');
				console.log( $scope.project);
				$scope.project.$update({projId: $scope.project._id}, function(res){
					console.log('Successfully saved!');
					Projects.query(function(data){ $scope.projects = data; console.log(data);});
					$scope.showAddForm = false;
				}, function (err) {
					console.log(err);
				});
			};

			$scope.cancel =function() {
					$scope.showAddForm = false;
			};
		});
	};

	$scope.$watchCollection('project.keywords', function(newValue, old){console.log(newValue);});
}
);
