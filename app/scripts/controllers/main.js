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
      
    function MainCtrl($scope) {
    var vm = this;
    vm.title='Thank you for following this course';
    
    var movie = {
        title:'Assassin\'s Creed',
        image:'https://assets.vg247.it/current//2016/01/maxresdefault6.jpg',
        description:'Assassin\'s Creed è un film del 2016 diretto da Justin Kurzel.Basato sull\'omonima serie videoludica sviluppata da Ubisoft, anche produttrice della pellicola, il film è una storia originale ambientata nello stesso universo dei videogiochi.'
    };
    //vm.movieTitle=movie.title;//avendo definito la variabile movieTitle nell'oggetto vm, è ora accessibile dalla vista (html marker)
    $scope.movieTitle=movie.title;
    /*sulla view, se scrivessi mc.movieTitle non lo trova! in quanto non 
     *fa parte dell'oggetto mainCtrl ma bensì, dello scope; infatti se scrivo {{movieTitle}} viene valorizzato
     * proprio perchè il binding è stato fatto sullo scope e non sull'oggetto utilizzando il controllerAs introdotto
     * da AngularJS 1.2
     *   */
    vm.movieDescription=movie.description;
  };
  })();