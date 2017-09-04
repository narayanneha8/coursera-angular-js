(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('controller', MenuCategoriesController)
.service('menuService', MenuSearchService);

MenuCategoriesController.$inject = ['menuService'];
function MenuCategoriesController(menuService) {
  var menu = this;
  menu.item = "";
  menu.found = [];


  menu.foundItems = function() {
    try {
      var promise = menuService.getMenuCategories(menu.item);
      // console.log("please handle error");
      // menu.found = menuService.getFound();
    } catch(error) {
      console.log("Catch: MenuCategoriesController");
      menu.error = error.message;
      console.log("menu.error", error.message);
    }
  };

  menu.found = menuService.getFound();
  menu.removeItem = function(itemIndex) {
  menuService.remove(itemIndex);
 };

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  var found = [];

  service.getMenuCategories = function (userEntry) {
    if (userEntry!= "") {
      var promise = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      });

      promise.then(function(response) {
        var menuArray = response.data.menu_items;

        for (var i = 0; i <menuArray.length; i++) {
          var name = menuArray[i].description;
          if(name.toLowerCase().indexOf(userEntry) != -1) {
            var list={
              name: menuArray[i].name,
              shortName: menuArray[i].short_name,
              description: menuArray[i].description
            };
            found.push(list);
          }
        }
      })
   .catch(function(error){
     console.log("something went wrong");
  });

    } else {
      console.log("Null entry");
      throw new Error("Nothing Found.");
      console.log("userEntry throwing Exception - null entry ");
    }

  };

  service.getFound = function() {
    console.log("lenth=", found.length);
    if (found.lenth == 0) {
      console.log("getFound: length=0");
      throw new Error("nothing found in the list");
    }
    return found;
  };

  service.remove = function(index) {
    found.splice(index,1);
  }
}

})();
