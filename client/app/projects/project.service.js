'use strict';

angular.module('madebyaliceApp')
.factory('Projects',[ '$resource', function ($resource) {
		return  $resource('/api/projects/:projId', {projId:'@projId'}, {'update':{method:'PUT'}}); 
	}
  ]);
