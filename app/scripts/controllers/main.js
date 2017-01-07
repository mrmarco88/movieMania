(function(){
    

'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', MainCtrl);
      
    function MainCtrl() {
    var vm = this;
    vm.title='Thank you for following this course';
  };
  })();