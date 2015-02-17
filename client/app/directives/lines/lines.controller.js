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
