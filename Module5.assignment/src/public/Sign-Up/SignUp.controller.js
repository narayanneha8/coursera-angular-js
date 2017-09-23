(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService'];
  function SignUpController(SignUpService){
    var reg = this;

    reg.submit = function(){
      reg.completed = true;
      var promise = SignUpService.getFavorite(reg.user.favorite);

      promise.then(function(response){
        reg.exists = true;
        reg.Dish = response;
        SignUpService.register(reg.user.firstname, reg.user.lastname, reg.user.phone, reg.user.email, reg.user.favorite);

      })
      .catch(function(error){
        reg.exists = false;
        reg.error = true;
        console.log("something went terribly wrong");
      });
    };

  }

})();
