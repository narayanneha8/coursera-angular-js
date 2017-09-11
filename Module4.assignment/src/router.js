(function(){
  'use strict'

  angular.module('menuapp')
  .config(RouterConfig);

  RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RouterConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    //Set up UI states
    $stateProvider
    //home page
    .state('home',{
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })
    //categories page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.template.html'
    })
    //item page
    .state('items', {
      url: "/items",
      templateUrl: 'src/menuapp/templates/items.template.html'
    });
  }

})();
