(function() {
  'use strict';

  angular.module('data')
  .controller('itemController', ItemController);

  ItemController.$inject = ['items'];
  function ItemController(items){
    var items = this;
    items.menu_items = items;
  }

  ItemController.$inject = ['response'];
  function ItemController(response){
    var items = this;
    console.log("in item controller");
    console.log("the value of response.data is : ", response.data);
    items.menu_items = response.data.menu_items;
  }
  // ItemController.$inject = ['$stateParams', 'categories'];
  // function ItemController($stateParams, categories){
  //   var items = this;
  //   // items.menu_items = items;
  //   var menu_items = categories[$stateParams.category];
  //   console.log("In Controller", menu_items);
  // }

})();
