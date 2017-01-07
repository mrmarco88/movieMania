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
  .controller('MainCtrl', MainCtrl)
  .controller('FormCtrl', FormCtrl)
  .controller('SubCtrl', SubCtrl);
    
    function MainCtrl($scope) {
    var vm = this;
    vm.title='Thank you for following this course';
    
   /* 
    * 
    * Primo esempio
    * var movie = {
        title:'Assassin\'s Creed',
        image:'http://s3.foxmovies.com/foxmovies/production/films/111/images/posters/484-film-page-large.jpg',
        description:'Assassin\'s Creed è un film del 2016 diretto da Justin Kurzel.Basato sull\'omonima serie videoludica sviluppata da Ubisoft, anche produttrice della pellicola, il film è una storia originale ambientata nello stesso universo dei videogiochi.'
    };
    //vm.movieTitle=movie.title;//avendo definito la variabile movieTitle nell'oggetto vm, è ora accessibile dalla vista (html marker)
    $scope.movieTitle=movie.title;
    /*sulla view, se scrivessi mc.movieTitle non lo trova! in quanto non 
     *fa parte dell'oggetto mainCtrl ma bensì, dello scope; infatti se scrivo {{movieTitle}} viene valorizzato
     * proprio perchè il binding è stato fatto sullo scope e non sull'oggetto utilizzando il controllerAs introdotto
     * da AngularJS 1.2
     *   */
    //vm.movieImage=movie.image;
    //vm.movieDescription=movie.description;
    //vm.movie=movie;
    //Fine primo esempio
    var movieList = [{
        title:'Assassin\'s Creed',
        image:'http://s3.foxmovies.com/foxmovies/production/films/111/images/posters/484-film-page-large.jpg',
        description:'Assassin\'s Creed è un film del 2016 diretto da Justin Kurzel.Basato sull\'omonima serie videoludica sviluppata da Ubisoft, anche produttrice della pellicola, il film è una storia originale ambientata nello stesso universo dei videogiochi.'
    },{
        title:'Inception',
        image:'http://www.ilgiornale.it/sites/default/files/foto/2015/06/04/1433427454-inception.jpg',
        description:'Inception è un film del 2010 scritto, prodotto e diretto da Christopher Nolan e interpretato da Leonardo DiCaprio, Tom Hardy, Ken Watanabe, Joseph Gordon-Levitt, Ellen Page, Marion Cotillard e Cillian Murphy, vincitore di 4 premi Oscar 2011: miglior fotografia, miglior sonoro, miglior montaggio sonoro e migliori effetti speciali.'
    },{
        title:'Sette anni in Tibet',
        image:'http://guidatv.sky.it/app/guidatv/images/epgimages/2012/12/27/sette-anni-in-tibet-visore.13318_big.jpg',
        description:'Sette anni in Tibet (Seven Years in Tibet) è un film del 1997 diretto da Jean-Jacques Annaud, ispirato ad un libro autobiografico scritto da Heinrich Harrer e pubblicato nel 1953.La colonna sonora è composta da John Williams. I soli del violoncello sono eseguiti da Yo-Yo Ma.'
    }];

    vm.movies=movieList; //se uso il ControllerAs nella vista devo usare movie in mc.movies
   //$scope.movies=movieList; //se uso lo scope, nella vista devo usare solo movie
  };
  
  
  function FormCtrl(){
      var vm = this;
      console.log("We have a form controller");
  };
  
   function SubCtrl($scope){
      var vm = this;
      $scope.title='Available film to watch: ' ;
      //$scope.title='Available film to watch: ' + $scope.movies.length + ' movies'; per far si che funzioni devo salvare la movieList nello scope
  };
  })();