(function () {
  "use strict";

  angular.module('public')
  .service('SignUpService', SignUpService);

  function SignUpService(){
    var service = this;
    var users = [];

    service.register = function(FirstName, LastName, Email, Phone, ItemNo){
      var userData = {
        firstname: FirstName,
        lastname: LastName,
        email: Email,
        phone: Phone,
        favorite: ItemNo
      }
      users.push(userData);
     };

     service.getUsers = function(){
      return users;
      }

    }

})();
