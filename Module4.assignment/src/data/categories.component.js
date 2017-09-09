(function(){
  'use strict';

  angular.module('data')
  .component('categories',{
    templateUrl: "",
    controller: DataCategoriesComponentController,
    bindings:{
      items: '<',
      myTitle: '@Title',
      onRemove: '&'
    }

  });

  function DataCategoriesComponentController(){

  }



})();
