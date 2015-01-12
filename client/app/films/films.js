'use strict';

angular.module('madebyaliceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.films', {
        url: '/films',
        templateUrl: 'app/films/films.html',
        controller: 'FilmsCtrl'
      });
  });
