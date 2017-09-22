(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService', 'MenuService'];
  function SignUpController(SignUpService, MenuService){
    var reg = this;
    reg.user = {};
  
    // reg.favoriteItems = MenuService.getMenuItems(reg.user.favorite);


    reg.submit = function(){
      reg.completed = true;

      SignUpService.register(reg.user.firstname, reg.user.lastname, reg.user.phone, reg.user.email, reg.user.favorite);
      reg.favoriteItems = MenuService.getMenuItems(reg.user.favorite);
      console.log("items: ", reg.favoriteItems);
    };

    reg.getUser = SignUpService.getUsers();

  }

})();
