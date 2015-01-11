'use strict';
var ProjectInstance = {
	name: '',
	type:'',
	description: ''
};
angular.module('madebyaliceApp')
.controller('AdminCtrl', function ($scope, Projects) {
	$scope.showAddForm = false;
	$scope.tables= [
		{name: 'projects', disable: false, fields: [{key: 'name', value:''}, {key:'type', value:''}, {key:'description', value:''}]},
		{name: 'images', disable: true, fields: [{key: 'name', value:''}, {key:'type', value:''}, {key:'description', value:''}]},
		{name: 'artwork', disable:true, fields: [{key: 'name', value:''}, {key:'type', value:''}, {key:'description', value:''}]}
	];
	$scope.selectedTable =  $scope.tables[0];
	$scope.project= new Projects();
	$scope.projects =  Projects.query(function(data){ $scope.projects = data; console.log(data);});

	$scope.addProject = function() {
		$scope.project = new Projects();
		$scope.saveProject = function(){
			$scope.project.$save( function(data) {
				Projects.query(function(data){ $scope.projects = data; console.log(data);
					$scope.showAddForm= false;
				});
			}, function(err){
			});
		}
	}

	$scope.deleteProject = function (_id) {
		Projects.remove({projId: _id}, function(data){
			console.log(data);
			Projects.query(function(data){ $scope.projects = data; console.log(data);});
		})
	};

	$scope.editProject = function(_id) {
		$scope.showAddForm = true;
		Projects.get({projId:_id}, function(project){
			$scope.project = project;
			$scope.saveProject= function() {
				$scope.project.$update({projId: $scope.project._id}, function(res){
					console.log("Successfully saved!");
					$scope.showAddForm = false;

				}, function (err) {
					console.log(err);
				});

			}
		});




	}
}
);
