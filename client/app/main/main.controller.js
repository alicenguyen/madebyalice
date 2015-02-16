'use strict';

angular.module('madebyaliceApp')
  .controller('MainCtrl', function ($scope, $timeout, $interval, Projects) {

    $scope.messageQueue = [
      {'text': ' a cs major.'},
      {'text': ' a developer.'},
      {'text': ' so into you!'},
      {'text': ' so love you!'},
      {'text': ' 26 years old!'},
      {'text': ' vietnamese!'},
      {'text': ' okay!'},
      {'text': ' in love the fugees and funyuns!'}
    ];

    $scope.action = 'fadeIn';
    $scope.currentMessage = $scope.messageQueue.shift();
    $scope.nextMessage = $scope.messageQueue.shift();

    $interval(function () {
      // push current back into queue
      $scope.messageQueue.push($scope.currentMessage);
      // update current and next
      $timeout(function () {
        $scope.action = 'fadeOut';
      }, 1500);
      $scope.action = 'fadeIn';
      $scope.currentMessage = $scope.nextMessage;
      $scope.nextMessage = $scope.messageQueue.shift();
    }, 2500);
  });
