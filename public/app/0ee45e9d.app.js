"use strict";angular.module("madebyaliceApp",["ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap","ngMaterial"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),c.html5Mode(!0)}]),angular.module("madebyaliceApp").controller("HomeCtrl",["$scope",function(a){a.workThings=[{thing:"github",link:"https://github.com/alicenguyen"},{thing:"linkedin",link:"https://www.linkedin.com/pub/alice-nguyen/65/580/641"},{thing:"currently working on",link:"http://zingchart-playground.herokuapp.com/#/client/1/charts"}],a.funThings=[{thing:"vsco",link:"http://nimbus.vsco.co/grid/1"},{thing:"soundcloud",link:"https://soundcloud.com/nihms"}],a.filmingThings=[{thing:"Jesus / Alex - Juliet",link:"http://youtu.be/s3Oso3T_-RM",description:"camerwoman"},{thing:"The iClicker Scene (a Office Space spoof)",link:"http://youtu.be/GfH2eQxUIU0",description:"director, video editing, producer, actress"},{thing:"Markr vs iClicker",link:"http://youtu.be/bnanHIvduMs",description:"set designer, director, camera woman"},{thing:"CS190 Toops in CSE: Intro to Mobile and Server Programming",link:"http://youtu.be/c3sL-CM2Q_U",description:"presenter"}]}]),angular.module("madebyaliceApp").config(["$stateProvider",function(a){a.state("/",{url:"/",templateUrl:"app/home/home.html",controller:"HomeCtrl"})}]),angular.module("madebyaliceApp").controller("MainCtrl",["$scope","$http",function(a){a.awesomeThings=[]}]),angular.module("madebyaliceApp").config(["$stateProvider",function(a){a.state("main",{url:"/main",templateUrl:"app/main/main.html",controller:"MainCtrl"})}]),angular.module("madebyaliceApp").factory("Modal",["$rootScope","$modal",function(a,b){function c(c,d){var e=a.$new();return c=c||{},d=d||"modal-default",angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("madebyaliceApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Home",link:"/"}],a.isCollapsed=!0,a.isActive=function(a){return a===b.path()}}]),angular.module("madebyaliceApp").run(["$templateCache",function(a){a.put("app/home/home.html",'<header><div class=container><div layout=horizontal><img src=assets/images/a9205563.mba-logo.png alt=""><div layout=vertical class=titles><br><br><p>computer science major</p><p>programmer</p><p>web / mobile developer</p></div><div flex></div><div layout=vertical><br><br><p>alice nguyen</p><p>a8nguyen@ucsd.edu</p></div></div></div></header><div class="container body"><div class=row><div class=col-lg-12><h1 class=page-header>Coming Soon.</h1><h3>\\\\ Works</h3></div><div class="col-lg-12 works"><div class=col-md-3><h4>programming / developing</h4></div><div class="col-md-9 box1"><ul ng-repeat="thing in workThings"><li><a href={{thing.link}}>{{thing.thing}}</a></li></ul></div></div><div class="col-lg-12 works"><div class=col-md-3><h4>film / productions</h4></div><div class=col-md-9 style=padding-left:0px><ul ng-repeat="thing in filmingThings"><li><div class=col-md-6><a href={{thing.link}}>{{thing.thing}}</a></div><div class=col-md-6><p>{{thing.description}}</p></div></li></ul></div></div><div class="col-lg-12 works"><div class=col-md-3><h4>fun things</h4></div><div class=col-md-9><ul ng-repeat="thing in funThings"><li><a href={{thing.link}}>{{thing.thing}}</a></li></ul></div></div></div></div><footer class=footer><div class=container><p>madebyalice v2.0.13 |</p></div></footer>'),a.put("app/main/main.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><header class=hero-unit id=banner><div class=container><h1>\'Allo, \'Allo!</h1><p class=lead>Kick-start your next web app with Angular Fullstack</p><img src=assets/images/d535427a.yeoman.png alt="I\'m Yeoman"></div></header><div class=container><div class=row><div class=col-lg-12><h1 class=page-header>Features:</h1><ul class="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6" ng-repeat="thing in awesomeThings"><li><a href=# tooltip={{thing.info}}>{{thing.name}}</a></li></ul></div></div></div><footer class=footer><div class=container><p>Angular Fullstack v2.0.13 | <a href=https://twitter.com/tyhenkel>@tyhenkel</a> | <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open">Issues</a></p></div></footer>'),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div class="navbar navbar-default navbar-static-top" ng-controller=NavbarCtrl><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="isCollapsed = !isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="/" class=mba-navbar-brand><img src=assets/images/a9205563.mba-logo.png alt=""></a></div><div collapse=isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav"><li ng-repeat="item in menu" ng-class="{active: isActive(item.link)}"><a ng-href={{item.link}}>{{item.title}}</a></li></ul></div></div></div>')}]);