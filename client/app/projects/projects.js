'use strict';

angular.module('madebyaliceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });
