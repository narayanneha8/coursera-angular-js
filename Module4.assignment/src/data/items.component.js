(function(){
  'use strict';

  angular.module('data')
  .component('items',{
    templateUrl: "",
    controller: ItemsComponentController,
    bindings:{
      items: '<',
      myTitle: '@Title',
      onRemove: '&'
    }

  });

  function ItemsComponentController(){

  }
})();
