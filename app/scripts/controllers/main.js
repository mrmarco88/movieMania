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
        category:'Azione',
        description:'Assassin\'s Creed è un film del 2016 diretto da Justin Kurzel.Basato sull\'omonima serie videoludica sviluppata da Ubisoft, anche produttrice della pellicola, il film è una storia originale ambientata nello stesso universo dei videogiochi.'
    },{
        title:'Inception',
        image:'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2015/06/03/13/inception.jpg',
        category:'Azione',
        description:'Inception è un film del 2010 scritto, prodotto e diretto da Christopher Nolan e interpretato da Leonardo DiCaprio, Tom Hardy, Ken Watanabe, Joseph Gordon-Levitt, Ellen Page, Marion Cotillard e Cillian Murphy, vincitore di 4 premi Oscar 2011: miglior fotografia, miglior sonoro, miglior montaggio sonoro e migliori effetti speciali.'
    },{
        title:'Sette anni in Tibet',
        image:'http://guidatv.sky.it/app/guidatv/images/epgimages/2012/12/27/sette-anni-in-tibet-visore.13318_big.jpg',
        category:'Drammatico',
        description:'Sette anni in Tibet (Seven Years in Tibet) è un film del 1997 diretto da Jean-Jacques Annaud, ispirato ad un libro autobiografico scritto da Heinrich Harrer e pubblicato nel 1953.La colonna sonora è composta da John Williams. I soli del violoncello sono eseguiti da Yo-Yo Ma.'
    }];

    vm.movies=movieList; //se uso il ControllerAs nella vista devo usare movie in mc.movies
   //$scope.movies=movieList; //se uso lo scope, nella vista devo usare solo movie
   vm.newMovieTitle='';
   vm.newMovieDescription='';
   vm.newMovieImage='';
   
   vm.validateTitle =  function validateTitle() {
       if(vm.movie.title.length>0){
           console.debug(vm.movie.title);
       }else{
           window.alert('Title is Required');
       }
   };
   vm.movie = {
       title:'',
       image:'http://www.101cosedafare.it/wp-content/uploads/2012/10/ciak.png',
       category:'',
       description:''
   };
   vm.addMovie = function addMovie(){
     /*var movie = {
         title:vm.newMovieTitle,
         //category: vm.newMovieCategory,
         image:vm.newMovieImage,
         description: vm.newMovieDescription,
         category:vm.newMovieCategory
         
        };*/
     vm.movies.push(this.movie);
   };
   
   vm.checkCategorySelected=function checkCategorySelected(){
       if(vm.movie.category ===''){
           window.alert('Category cannot be empty');
       }
   };
   
   vm.checkDescription = function checkDescription(){
       console.debug(vm.movie.description);
       
   };
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