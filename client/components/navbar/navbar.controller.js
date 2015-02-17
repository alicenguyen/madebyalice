'use strict';

angular.module('madebyaliceApp')
  .controller('NavbarCtrl', function ($scope, $location) {

    $scope.isActive = function (route) {
      return route === $location.path();
    };

    $scope.menu = [
      {
        title: 'Home',
        state: 'main',
        active: true,
        url: '/'
      },
      {
        title: 'Projects',
        state: 'main.projects',
        active: false,
        url:'/projects'
      },
      {
        title: 'Box of Things',
        state: 'main.box',
        active: false,
        url: '/box'
      },
      {
        title: 'Contact',
        state: 'main.contact',
        active: false,
        url: '/contact'
      },
      {
        title: 'About',
        state: 'main.about',
        active: false,
        url: '/about'
      }
    ];

    $scope.isCollapsed = true;

    $scope.updateActive = function (index) {
      for (var i in $scope.menu) {
        $scope.menu[i].active = false;
      }
      $scope.menu[index].active = true;
    }
  });
