(function(){
  'use strict'

  angular.module('menuapp')
  .config(RouterConfig);

  RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RouterConfig($stateProvider, $urlRouterProvider){

    //redirect to home page if no url matches
    $urlRouterProvider.otherwise('/');

    // set up UI states
    $stateProvider

    // home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.template.html'
    })
    .state('items', {
      url: '/items',
      templateUrl: 'src/menuapp/templates/items.template.html'
    });

  }

})();
