'use strict';

angular.module('madebyaliceApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

	$scope.workItems = [
		// {'title': 'home'},
		// {'title': 'programming / development'},
		// {'title': 'film / production'},
		// {'title': 'fun things'},
		// {'title': 'about me'}
	];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
