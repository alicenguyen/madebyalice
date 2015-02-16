'use strict';

angular.module('madebyaliceApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngMaterial',
  'ngAnimate',
  'ngTagsInput'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider .otherwise('/');
    $locationProvider.html5Mode(true);

		// define alternate theme
		var lightMap = $mdThemingProvider.extendPalette('cyan', { '500': 'ffffff'	});
		$mdThemingProvider.definePalette('lightTheme', lightMap);
		$mdThemingProvider.theme('default').primaryColor('lightTheme').accentColor('grey');

  })

  .controller('RootCtrl', ['$scope', function($scope){

    $scope.setState = function(url) {
      $scope.activeState = url;
      console.log($scope.activeState);
    };

  }]);

