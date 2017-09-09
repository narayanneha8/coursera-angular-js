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

    menudata.items = function(shortName){
      var promise = MenuDataService.getItemsForCategory(shortName);

      promise.then(function(response){
        return response.data;
      }).catch(function(error){
        console.log("SomeThing went wrong in category by short Name");
      });
    };

  }

})();
