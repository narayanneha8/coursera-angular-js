(function(){
  'use strict';

  var name = ["neha", "ruby", "sonu", "monu"];

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

var bought = [];

  angular.module('check-off', [])
  .controller('controller1', MyController1)
  .controller('controller2', MyController2)
  .service('shopService', shopService);



  function shopService(){
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


  MyController1.inject = ['shopService'];
  function MyController1(shopService){
    var shopList = this;
    shopList.buylist = ToBuy;

    shopList.pushToBought = function(itemIndex){
    shopService.addItem(shopList.buylist[itemIndex].name, shopList.buylist[itemIndex].quantity);
    shopList.buylist.splice(itemIndex, 1);
    };
  }



  MyController2.inject = ['shopService'];
  function MyController2(shopService){
    var boughtList = this;
    boughtList.item = shopService.getItem();
  }



})();
