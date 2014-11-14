'use strict';

angular.module('madebyaliceApp')
  .controller('HomeCtrl', function ($scope) {
      $scope.workThings= [ { thing: 'github', link: 'https://github.com/alicenguyen'},
		{ thing: 'linkedin', link: 'https://www.linkedin.com/pub/alice-nguyen/65/580/641'},
		{ thing: 'currently working on', link: 'http://zingchart-playground.herokuapp.com/#/client/1/charts'}
	  ];
	
		$scope.funThings = [ {thing: 'vsco', link: 'http://nimbus.vsco.co/grid/1'},
			{thing: 'soundcloud', link: 'https://soundcloud.com/nihms'}
		];

		$scope.filmingThings = [ { thing: 'Jesus & Alex - Juliet', link: 'http://youtu.be/s3Oso3T_-RM', description: 'director'},
			{ thing: 'The iClicker Scene (an Office Space spoof)', link: 'http://youtu.be/GfH2eQxUIU0', description: 'director, editor, producer, actress'},
			{ thing: 'Markr vs iClicker', link: 'http://youtu.be/bnanHIvduMs', description: 'director, set designer'},
			{ thing: 'CS190 Topics in CSE: Intro to Mobile and Server Programming' , link: 'http://youtu.be/c3sL-CM2Q_U', description: 'presenter' }
		]; 
  });
