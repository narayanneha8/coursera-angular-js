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

menu.foundItems = function(){
  console.log("foundItem method envoked");
 var promise = menuService.getMenuCategories();

 promise.then(function (response) {
   var menuArray = response.data.menu_items;
   //console.log("until line 19 executed");
   console.log("menu.item is : ", menu.item);
   //console.log("menuArray length: ", menuArray.length);

   for(var i = 0; i <menuArray.length; i++){
     var name = menuArray[i].description;
     //console.log("menuArray description: ", name.toUpperCase());
     if(name.toLowerCase().indexOf(menu.item) != -1){
       var list={
         name: menuArray[i].name,
         shortName: menuArray[i].short_name,
         description: menuArray[i].description
       };
       menu.found.push(list);
       console.log("found item , ", menu.found);
     }
   }
  })
 .catch(function(error){
   console.log("something went wrong");
 });
};

}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });

    return response;
  };
}

})();
