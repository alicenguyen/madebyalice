'use strict';

angular.module('madebyaliceApp')
  .factory('Keywords',[ '$resource', function ($resource) {
	return  $resource('/api/keywords/:tagId', {tagId:'@tagId'}, {'update':{method:'PUT'}}); 
  }]);
