'use strict';

angular.module('madebyaliceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.projects', {
        url: 'projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      })
	  .state('main.projects.detail', {
	  	url: '/:name',
		templateUrl: 'app/projects/projectsDetail.html',
		controller: 'ProjectsDetailCtrl'
	  });
  });
