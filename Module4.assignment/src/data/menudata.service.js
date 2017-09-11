(function(){
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);
  // .constant('uriPath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http'];
  function MenuDataService(http){
    var service = this;

    service.getAllCategories = function(){
      var response = http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      });
      return response;
    };

    service.getItemsForCategory = function(categoryShortName){
      var response = http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
        params:{
          category: categoryShortName
        }
      });
      console.log("In http service categoryShortName", categoryShortName);
      return response;
    };
  }
})();
