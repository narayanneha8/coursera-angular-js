(function() {
  'use strict';

  angular.module('data')
  .controller('dataController', DataController);

  DataController.$inject = ['MenuDataService'];
  function DataController(MenuDataService){
    var menudata = this;
    var promise = MenuDataService.getAllCategories();

    promise.then(function (response){
      menudata.categories = response.data;
    }).catch(function(error){
      console.log("SomeThing went wrong in category");
    });

    menudata.itemList = function(shortName){
      var promise = MenuDataService.getItemsForCategory(shortName);
      console.log("i am getting clicked", shortName);

      promise.then(function(response){
        console.log(response.data);
        menudata.menu =  response.data.menu_items;
      }).catch(function(error){
        console.log("SomeThing went wrong in category by short Name");
      });
    };

  }

})();
