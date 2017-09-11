(function(){
  'use strict';

  angular.module('data')
  .component('categories',{
    templateUrl: "src/menuapp/templates/categories.template.html",
  //  controller: DataCategoriesComponentController,
    bindings:{
      items: '<',
      menu: '<'

    }
  });

  // function DataCategoriesComponentController(){
  //   var $ctrl = this;
  //
  //   $ctrl.getMenuList = function(){
  //     if($ctrl.categories.length !==0){
  //       return true;
  //     }else{
  //       return false;
  //     }
  //   };
  //
  // }

})();
