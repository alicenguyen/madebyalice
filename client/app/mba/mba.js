'use strict';

angular.module('madebyaliceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mba', {
        url: '/',
        templateUrl: 'app/mba/mba.html',
        controller: 'MbaCtrl'
      });
  });