(function(){
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('uriPath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http'];
  function MenuDataService(http){
    var service = this;

    service.getAllCategories = function(){
      var response = http({
        method: "GET",
        url: (uriPath + "/categories.json")
      });
      return response;
    };

    service.getItemsForCategory = function(categoryShortName){
      var response = http({
        method: "GET",
        url: (uriPath + "/menu_items.json"),
        params:{
          category: categoryShortName
        }
      });
      return response;
    };
  }
})();
