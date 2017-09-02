(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('controller', MenuCategoriesController)
.service('menuService', MenuSearchService);

MenuCategoriesController.$inject = ['menuService'];
function MenuCategoriesController(menuService) {
  var menu = this;
  menu.item = "";
  //menu.found = [];

menu.foundItems = function(){
  console.log("foundItem method envoked");
 var promise = menuService.getMenuCategories(menu.item);
 menu.found = menuService.getFound();



 };
 menu.removeItem = function(itemIndex){
   menuService.remove(itemIndex);
 };

}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  var found = [];

  service.getMenuCategories = function (userEntry) {
    var promise = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });

    promise.then(function (response) {
      var menuArray = response.data.menu_items;
      // console.log("until line 19 executed");
      // console.log("menu.item is : ", userEntry);
      // console.log("menuArray length: ", menuArray.length);

      for(var i = 0; i <menuArray.length; i++){
        var name = menuArray[i].description;
        //console.log("menuArray description: ", name.toUpperCase());
        if(name.toLowerCase().indexOf(userEntry) != -1){
          var list={
            name: menuArray[i].name,
            shortName: menuArray[i].short_name,
            description: menuArray[i].description
          };
          //console.log("inside for and if statement", menuArray[i].name);
          found.push(list);
          // console.log("found array items:  ", found);
        }
      }
     })
    .catch(function(error){
      console.log("something went wrong");
    });
  };

  service.getFound = function(){
    return found;
  };

  service.remove = function(index){
    found.splice(index,1);
  }
}

})();
