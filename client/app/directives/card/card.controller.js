'use strict';

/**
 * @ngdoc directive
 * @name madebyaliceApp.directive:card
 * @description
 * # card
 */
angular.module('madebyaliceApp')
  .directive('card', function () {
    return {
			templateUrl: 'app/directives/card/card.html',
      restrict: 'E',
			transclude: true
    };
  });
