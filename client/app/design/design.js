'use strict';

angular.module('madebyaliceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.design', {
        url: 'design',
        templateUrl: 'app/design/design.html',
        controller: 'DesignCtrl'
      });
  });
