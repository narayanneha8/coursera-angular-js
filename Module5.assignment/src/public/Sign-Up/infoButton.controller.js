(function () {
  "use Strict";

angular.module('public')
.controller('InfoCtrl', InfoController);

InfoController.$inject = ['user', 'Dish', 'PictureUrl'];
function InfoController(user, Dish, PictureUrl){
  var ctrl = this;

  ctrl.user = user;
  ctrl.Dish = Dish;
  ctrl.PictureUrl = PictureUrl;

  ctrl.NotValidUser = function(){
    if(user.firstname == ""){
      return true;
    }
    return false;
  };

}

})()
