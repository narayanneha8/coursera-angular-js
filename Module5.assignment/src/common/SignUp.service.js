(function () {
  "use strict";

  angular.module('common')
  .service('SignUpService', SignUpService);

  SignUpService.$inject= ['$http', 'ApiPath']
  function SignUpService($http, ApiPath){
    var service = this;
    var DishUrl = "";
    var user = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      favorite: ""
    };

    service.getFavorite = function(DishSortName){
      return $http.get(ApiPath + "/menu_items/" + DishSortName + ".json").then(function(response){
        service.FavoriteDish = response.data;
        return service.FavoriteDish;
      });
    };


    service.register = function(FirstName, LastName, Email, Phone, DishSortName, response){
      user = {
        firstname: FirstName,
        lastname: LastName,
        email: Email,
        phone: Phone,
      };

      DishUrl = ApiPath + '/images/' + DishSortName + '.jpg';
     };

     service.getUser = function(){
       return user;
     };

     service.getImageUrl = function(){
       return DishUrl;
     };

    }

})();
