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
      templateUrl: 'src/menuapp/templates/categories.template.html',
      controller: 'dataController as list',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories()
          .then(function(response){
            return response.data;
          });
        }]
      }
    })
    //item page
    .state('items', {
      url: "/items/{category}",
      templateUrl: 'src/menuapp/templates/items.template.html',
      controller: 'itemController as item',
      resolve: {
        response: ['$stateParams', 'MenuDataService',
              function($stateParams, MenuDataService){
                console.log("in router");
                return MenuDataService.getItemsForCategory($stateParams.category);
                // .then(function(response){
                //   console.log("in router response", $stateParams.category);
                //   console.log("response in xml ", response.data.menu_items);
                // return response.data.menu_items;
                //})

        }]
      }

    });
  }

})();
