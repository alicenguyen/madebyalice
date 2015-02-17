'use strict';

angular.module('madebyaliceApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        title: 'Home',
        state: 'main',
        active: true
      },
      {
        title: 'Projects',
        state: 'main.projects',
        active: false
      },
      {
        title: 'Contact',
        state: 'main.contact',
        active: false
      },
      {
        title: 'Box of Things',
        state: 'main.about',
        active: false
      },
      {
        title: 'About',
        state: 'main.about',
        active: false
      }
    ];

    $scope.isCollapsed = true;

    $scope.updateActive = function (index) {
      for (var i in $scope.menu) {
        $scope.menu[i].active = false;
      }

      $scope.menu[index].active = true;
    }


    $scope.isActive = function (route) {
      route === $location.path();
    };


  });
