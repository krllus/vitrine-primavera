angular
.module('wishList')
.component('wishList', {
    templateUrl:'components/wish-list/wish-list.template.html',
    controller: function CompanyInfoController($firebaseObject, $firebaseArray){

        var ctrl = this;
        ctrl.$onInit = function(){
            console.log('WishList component');
        }
    }
});
