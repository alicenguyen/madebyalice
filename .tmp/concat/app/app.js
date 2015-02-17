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
  .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$mdThemingProvider", function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider .otherwise('/');
    $locationProvider.html5Mode(true);

		// define alternate theme
		var lightMap = $mdThemingProvider.extendPalette('cyan', { '500': 'ffffff'	});
		$mdThemingProvider.definePalette('lightTheme', lightMap);
		$mdThemingProvider.theme('default').primaryColor('lightTheme').accentColor('grey');

  }])

  .controller('RootCtrl', ['$scope', function($scope){

    $scope.setState = function(url) {
      $scope.activeState = url;
      console.log($scope.activeState);
    };

  }]);


'use strict';

angular.module('madebyaliceApp')
  .factory('Keywords',[ '$resource', function ($resource) {
	return  $resource('/api/keywords/:tagId', {tagId:'@tagId'}, {'update':{method:'PUT'}}); 
  }]);

'use strict';

angular.module('madebyaliceApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.message = 'Hello';
  }]);

'use strict';

angular.module('madebyaliceApp')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('main.about', {
        url: 'about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      });
  }]);

'use strict';

angular.module('madebyaliceApp')
.controller('AdminCtrl', ["$scope", "Projects", "Keywords", function ($scope, Projects, Keywords) {
	$scope.showAddForm = false;
	$scope.tables= [
		{name: 'projects', disable: false},
		{name: 'images', disable: true},
		{name: 'artwork', disable:true}
	];

	$scope.selectedTable =  $scope.tables[0];
	$scope.projects =  Projects.query(function(data){ $scope.projects = data; console.log(data);});
	$scope.project= new Projects();


	// menu attributes
	$scope.types = ['Web', 'iOS', 'Android', 'Systems'];

	$scope.selectedType = ''; 

	$scope.addProject = function() {
		$scope.project = new Projects();
		$scope.saveProject = function(){
			$scope.project.$save( function() {
				Projects.query(function(data){ $scope.projects = data; console.log(data);
					$scope.showAddForm= false;
				});
			}, function(err){
			});
		};
	};

	$scope.deleteProject = function (_id) {
		Projects.remove({projId: _id}, function(data){
			console.log(data);
			Projects.query(function(data){ $scope.projects = data; console.log(data);});
		});j
	};


	/**
	 * Editing mode
	 */
	$scope.editProject = function(_id) {
		$scope.showAddForm = true;

		Projects.get({projId:_id}, function(project){
			$scope.project = project;
			$scope.autoTags = Keywords.query(function(){
			console.log($scope.autoTags);
			}
			);

			$scope.saveProject= function() {
				$scope.project.type = $scope.selectedType;
				console.log($scope.project.keywords);

				$scope.project.$update({projId: $scope.project._id}, function(res){
					console.log('Successfully saved!');
					Projects.query(function(data){ $scope.projects = data; console.log(data);});
					$scope.showAddForm = false;
				}, function (err) {
					console.log(err);
				});

			};

			$scope.cancel =function() {
				$scope.showAddForm = false;
			};
		});
	};


	// date picker
	$scope.format = 'shortDate';
	$scope.today = function() {
		$scope.dt = new Date();
	}
	$scope.openStart = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.openedStart = true;
	}
	$scope.openEnd = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.openedEnd = true;
	}
}]
);

'use strict';

angular.module('madebyaliceApp')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  }]);

'use strict';

angular.module('madebyaliceApp')
  .controller('BoxCtrl', ["$scope", function ($scope) {
    $scope.message = 'Hello';
  }]);

'use strict';

angular.module('madebyaliceApp')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('main.box', {
        url: 'box',
        templateUrl: 'app/box/box.html',
        controller: 'BoxCtrl'
      });
  }]);

'use strict';

angular.module('madebyaliceApp')
  .controller('ContactCtrl', ["$scope", function ($scope) {
    $scope.message = 'Hello';
  }]);

'use strict';

angular.module('madebyaliceApp')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('main.contact', {
        url: 'contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      });
  }]);

'use strict';

angular.module('madebyaliceApp')
  .controller('DesignCtrl', ["$scope", function ($scope) {
    $scope.message = 'Hello';
  }]);

'use strict';

angular.module('madebyaliceApp')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('main.design', {
        url: 'design',
        templateUrl: 'app/design/design.html',
        controller: 'DesignCtrl'
      });
  }]);

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
		transclude: true,
		link: function(scope, element, attrs) {
		}
	};
});

/**
 * Created by alicenguyen on 2/16/15.
 */
'use strict';

angular.module('madebyaliceApp')
.directive('mbaLines', function() {
   return{
     restrict: 'AEC',
     link: function(scope, element, attrs){

       function drawLine(){


       }

       function initPaper() {
         paper.install(window);
         paper.setup('canvas');
       }


       initPaper();
     }
   }
  });

'use strict';

angular.module('madebyaliceApp')
  .controller('FilmsCtrl', ["$scope", function ($scope) {
    $scope.message = 'Hello';
  }]);

'use strict';

angular.module('madebyaliceApp')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('main.films', {
        url: 'films',
        templateUrl: 'app/films/films.html',
        controller: 'FilmsCtrl'
      });
  }]);

'use strict';

angular.module('madebyaliceApp')
  .controller('GithubCtrl', ["$scope", function ($scope) {
    $scope.message = 'Hello';
  }]);

'use strict';

angular.module('madebyaliceApp')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('github', {
        url: '/github',
        templateUrl: 'app/github/github.html',
        controller: 'GithubCtrl'
      });
  }]);
'use strict';

angular.module('madebyaliceApp')
  .controller('MainCtrl', ["$scope", "$timeout", "$interval", "Projects", function ($scope, $timeout, $interval, Projects) {

    var projectTypes = [ {name: 'mobile development'},{name: 'web development'}];

    var boxOfThings = ['Doodles', 'Short videos'];



  }]);

'use strict';

angular.module('madebyaliceApp')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  }]);

'use strict';

angular.module('madebyaliceApp')
.factory('Projects',[ '$resource', function ($resource) {
	return  $resource('/api/projects/:projId', {projId:'@projId'}, {'update':{method:'PUT'}}); 
}
])

.factory('Photos', function() {
	return  [
		{image_name: 'screenshot1', project_name: 'markr', type: 'ios', url: 'http://storage.googleapis.com/mba_images/markr/screen1.png'},
			{image_name: 'screenshot2', project_name: 'markr', type: 'ios', url: 'http://storage.googleapis.com/mba_images/markr/screen2.png'}

				];
});




'use strict';

angular.module('madebyaliceApp')
.controller('ProjectsCtrl', ["$scope", "Projects", "Photos", function ($scope, Projects, Photos) {
	$scope.projects =  Projects.query(function(data){ $scope.projects = data; console.log(data);});

	$scope.photos = Photos;
	console.log(Photos);

}])

.controller('ProjectsDetailCtrl', ["$scope", function($scope){
	console.log("hi");
}]);

'use strict';

angular.module('madebyaliceApp')
  .config(["$stateProvider", function ($stateProvider) {
    $stateProvider
      .state('main.projects', {
        url: 'projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      })
	  .state('main.projects.detail', {
	  	url: '/:name',
		templateUrl: 'app/projects/projectsDetail.html',
		controller: 'ProjectsDetailCtrl'
	  });
  }]);

'use strict';

angular.module('madebyaliceApp')
  .factory('Modal', ["$rootScope", "$modal", function ($rootScope, $modal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope, modalClass) {
      var modalScope = $rootScope.$new();
      scope = scope || {};
      modalClass = modalClass || 'modal-default';

      angular.extend(modalScope, scope);

      return $modal.open({
        templateUrl: 'components/modal/modal.html',
        windowClass: modalClass,
        scope: modalScope
      });
    }

    // Public API here
    return {

      /* Confirmation modals */
      confirm: {

        /**
         * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} del - callback, ran when delete is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */
        delete: function(del) {
          del = del || angular.noop;

          /**
           * Open a delete confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed staight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                deleteModal;

            deleteModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirm Delete',
                html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-danger',
                  text: 'Delete',
                  click: function(e) {
                    deleteModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancel',
                  click: function(e) {
                    deleteModal.dismiss(e);
                  }
                }]
              }
            }, 'modal-danger');

            deleteModal.result.then(function(event) {
              del.apply(event, args);
            });
          };
        }
      }
    };
  }]);

'use strict';

angular.module('madebyaliceApp')
  .controller('NavbarCtrl', ["$scope", "$location", function ($scope, $location) {

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
  }]);

angular.module('madebyaliceApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/about/about.html',
    "<div layout=column layout-fill flex>'About'coming very soon!</div>"
  );


  $templateCache.put('app/admin/admin.html',
    "<div layout=row layout-margin><div class=border flex=10><md-subheader>Tables:</md-subheader><div layout=column layout-align=\"center center\" layout-padding><select ng-model=selectedTable ng-options=\"table.name for table in tables\"></select><br><md-button ng-click=\"showAddForm=true; addProject();\"><md-icon icon=assets/images/ic_plus.png></md-icon></md-button></div></div><div flex class=border><md-content style=\"height:100%;overflow: visible\"><!-- Add / Edit form --><div ng-show=showAddForm ng-hide=!showAddForm><form class=form-horizontal style=padding:15px ng-model=project><div class=form-group><label class=\"col-sm-2 control-label\">Name</label><div class=col-sm-4><input class=form-control placeholder=Name ng-model=project.name></div><label class=\"col-sm-2 control-label\">Type</label><div class=col-sm-4><select ng-model=selectedType ng-options=\"type for type in types\"><option value=\"\"></option></select><!-- <input class=\"form-control\" id=\"\" placeholder=\"Type\" ng-model=\"project.type\"> --></div></div><div class=form-group><label for=\"\" class=\"col-sm-2 control-label\">Description</label><div class=col-sm-10><textarea class=form-control placeholder=Descrption rows=3 ng-model=project.description></textarea></div></div><div class=form-group><label for=\"\" class=\"col-sm-2 control-label\">Keywords</label><div class=col-sm-10><tags-input ng-model=project.keywords><auto-complete source=autoTags></auto-complete></tags-input></div></div><div class=form-group><label for=\"\" class=\"col-sm-2 control-label\">Start Date</label><div class=col-sm-4><p class=input-group><input class=form-control datepicker-popup={{format}} ng-model=project.start_date is-open=openedStart datepicker-options=dateOptions ng-required=true close-text=\"Close\"> <span class=input-group-btn><button type=button class=\"btn btn-default\" ng-click=openStart($event)><i class=\"glyphicon glyphicon-calendar\"></i></button></span></p></div><label for=\"\" class=\"col-sm-2 control-label\">End Date</label><div class=col-sm-4><p class=input-group><input class=form-control datepicker-popup={{format}} ng-model=project.end_date is-open=openedEnd datepicker-options=dateOptions ng-required=true close-text=\"Close\"> <span class=input-group-btn><button type=button class=\"btn btn-default\" ng-click=openEnd($event)><i class=\"glyphicon glyphicon-calendar\"></i></button></span></p></div></div><div class=form-group><div class=\"col-sm-offset-2 col-sm-10\"><md-button type=submit ng-click=cancel() class=\"btn btn-default\">Cancel</md-button><md-button type=submit ng-click=saveProject() class=\"btn btn-default\">Save</md-button></div></div></form></div><md-list ng-show=!showAddForm ng-hide=showAddForm><md-item ng-animate=\"'animate'\" ng-repeat=\"project in projects\"><div layout=row layout-margin layout-fill><div flex=10><span class=pull-right style=\"font-style:400; padding-right:20px\">{{project.name}}</span></div><div flex><span class=item-label>description:</span> <span>{{project.description}}</span></div><div flex=5 class=pull-right><md-button ng-click=editProject(project._id)><md-icon icon=assets/images/ic_edit.png></md-icon></md-button><md-button ng-click=deleteProject(project._id)><md-icon icon=assets/images/ic_delete.png></md-icon></md-button></div></div><div><div layout=row layout-margin layout-fill><div flex=10></div><div flex><span class=item-label>type:</span> <span>{{project.type}}</span></div><div flex><span class=item-label>start date:</span> <span>{{project.start_date | date:'shortDate'}}</span></div></div><div layout=row layout-margin layout-fill><div flex=10></div><div flex><span class=item-label>keywords:</span> <span ng-repeat=\"keyword in project.keywords track by $index\">{{keyword.text}}</span></div><div flex><span class=item-label>end date:</span> <span>{{project.end_date | date:'shortDate'}}</span></div></div><div layout=row layout-margin layout-fill><div flex=10></div><div flex><span class=item-label>images:</span> <span>{{project.images.length}}</span></div><div flex></div></div><md-divider></md-divider></div></md-item><!-- Form row --></md-list></md-content></div></div>"
  );


  $templateCache.put('app/box/box.html',
    "<div layout=column layout-fill flex>Box of Things coming very soon!</div>"
  );


  $templateCache.put('app/contact/contact.html',
    "<div layout=column layout-fill flex>Contacts coming very soon!</div>"
  );


  $templateCache.put('app/design/design.html',
    "<div layout=column layout-align=\"start center\"><h4>Design</h4>This is the design view.</div>"
  );


  $templateCache.put('app/directives/card/card.html',
    "<div class=card layout=row layout-align=\"center center\" ng-transclude></div>"
  );


  $templateCache.put('app/directives/lines/lines.html',
    ""
  );


  $templateCache.put('app/films/films.html',
    "<div layout=column layout-align=\"start center\"><h4>Film</h4></div>"
  );


  $templateCache.put('app/github/github.html',
    "<div class=col-md-12>This is the github view.</div>"
  );


  $templateCache.put('app/main/main.html',
    "<div layout=row layout-fill ng-controller=MainCtrl><!--sidenav--><div flex=15 layout=column class=padding><h2 ui-sref=main style=cursor:pointer>alice nguyen</h2>{{$route}}<br><ul class=\"nav nav-pills nav-stacked\" ng-controller=NavbarCtrl><li ng-repeat=\"item in menu\" ng-class=\"{active: isActive('{{item.url}}')}\" ng-click=updateActive($index) ui-sref={{item.state}} style=cursor:pointer>{{item.title}}</li></ul></div><div class=divider></div><!--main body--><div flex class=main-container ui-view layout=column layout-align=\"center center\"><div layout=row><div flex style=margin:5px;padding:5px><div><h1>Hello, world!</h1></div><p>Hello, world. I'm Alice and I'm a software developer. I plan on showcasing some of my works and projects here so stay tuned!</p></div><div flex style=margin:5px;padding:5px></div></div><div layout=row><div flex style=margin:5px;padding:5px></div><div flex style=margin:5px;padding:5px></div></div><canvas id=canvas mba-lines resize></canvas></div></div>"
  );


  $templateCache.put('app/projects/projects.html',
    "<div layout=column layout-fill flex><div ng-repeat=\"project in projects\"><div layout=row><div flex><h4>{{project.name}} <small style=color:#037E8C>{{project.type}}</small></h4><p>{{project.description}}</p></div><div flex></div></div></div></div>"
  );


  $templateCache.put('app/projects/projectsDetail.html',
    "<div layout=column></div>"
  );


  $templateCache.put('components/footer/footer.html',
    "<footer class=footer><div class=container><p>madebyalice v0.0.00</p></div></footer>"
  );


  $templateCache.put('components/modal/modal.html',
    "<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat=\"button in modal.buttons\" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>"
  );


  $templateCache.put('components/navbar/navbar.html',
    "<div class=md-toolbar-tools ng-controller=NavbarCtrl><!--<img class=\"logo\"src=\"assets/images/mba-logo-2.png\" alt=\"\" height=\"100\" />--><h5>alice nguyen</h5><span flex></span><ul class=\"nav nav-pills\"><li ng-repeat=\"item in menu\" class={{item.active}}><a ui-sref={{item.state}}>{{item.title}}</a></li></ul></div>"
  );

}]);

