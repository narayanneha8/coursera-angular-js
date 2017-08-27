(function(){
  'use strict';

var ToBuy = [
  {
    name: "cookies",
    quantity : "2"
  },
  {
    name: "almond",
    quantity : "11"
  },
  {
    name: "Milk",
    quantity : "1"
  },
  {
    name: "cake",
    quantity : "2"
  },
  {
    name: "coconut",
    quantity : "5"
  },
  {
    name: "flowers",
    quantity : "7"
  },
  {
    name: "sweet",
    quantity : "8"
  }

];


  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);



  function ShoppingListCheckOffService(){
    var service = this;
    var shoppedItem = [];

    service.addItem = function(itemName, itemQuantity){
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      shoppedItem.push(item);
      console.log("item pushed", item);
    };

    service.getItem = function(){
      return shoppedItem;
    };

  }


  ToBuyController.inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var shopList = this;
    shopList.buylist = ToBuy;

    shopList.pushToBought = function(itemIndex){
    ShoppingListCheckOffService.addItem(shopList.buylist[itemIndex].name, shopList.buylist[itemIndex].quantity);
    shopList.buylist.splice(itemIndex, 1);
    };
  }



  AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList = this;
    boughtList.item = ShoppingListCheckOffService.getItem();
  }



})();
