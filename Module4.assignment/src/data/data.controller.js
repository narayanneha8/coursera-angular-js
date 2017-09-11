(function() {
  'use strict';

  angular.module('data')
  .controller('dataController', DataController);

  DataController.$inject = ['categories'];
  function DataController(categories){
    var menudata = this;
    menudata.categories = categories;
    // var promise = MenuDataService.getAllCategories();
    //
    // promise.then(function (response){
    //   menudata.categories = response.data;
    // }).catch(function(error){
    //   console.log("SomeThing went wrong in category");
    // });
    //
    // menudata.items = function(shortName){
    //   var promise = MenuDataService.getItemsForCategory(shortName);
    //   console.log("i am getting clicked", shortName);
    //
    //   promise.then(function(response){
    //     console.log(response.data);
    //     menudata.menu_items =  response.data.menu_items;
    //   }).catch(function(error){
    //     console.log("SomeThing went wrong in category by short Name");
    //   });
    // };

  }

})();
