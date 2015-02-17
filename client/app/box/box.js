'use strict';

angular.module('madebyaliceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.box', {
        url: 'box',
        templateUrl: 'app/box/box.html',
        controller: 'BoxCtrl'
      });
  });
