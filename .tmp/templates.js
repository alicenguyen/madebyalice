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
