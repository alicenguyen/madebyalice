'use strict';

angular.module('madebyaliceApp')
.factory('Projects',[ '$resource', function ($resource) {
	return  $resource('/api/projects/:projId', {projId:'@projId'}, {'update':{method:'PUT'}}); 
}
])

.factory('Photos', function() {
	return  [
		{image_name: 'screenshot1', project_name: 'markr', type: 'ios', url: 'http://storage.googleapis.com/mba_images/markr/screen1.png'},
			{image_name: 'screenshot2', project_name: 'markr', type: 'ios', url: 'http://storage.googleapis.com/mba_images/markr/screen2.png'}

				];
});



