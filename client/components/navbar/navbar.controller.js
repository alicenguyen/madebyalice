'use strict';

angular.module('madebyaliceApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

	$scope.workItems = [
		{'title': 'programming / development'},
		{'title': 'film / production'},
		{'title': 'misc.'}
	];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
