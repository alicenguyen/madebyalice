'use strict';

angular.module('madebyaliceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('github', {
        url: '/github',
        templateUrl: 'app/github/github.html',
        controller: 'GithubCtrl'
      });
  });