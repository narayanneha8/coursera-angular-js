(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService'];
  function SignUpController(SignUpService){
    var reg = this;
    reg.user = {};

    reg.submit = function(){
      console.log("first Name",reg.user.firstname);
      reg.completed = true;

      SignUpService.register(reg.user.firstname, reg.user.lastname, reg.user.phone, reg.user.email, reg.user.favorite);
      console.log("user signed up", reg.user.firstname);

    };

    reg.getUser = SignUpService.getUsers();
    console.log("user object", reg.getUser);
  }

})();
