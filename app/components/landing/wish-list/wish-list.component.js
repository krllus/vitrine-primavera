angular
.module('wishList')
.config(WishListConfig)
.controller('WishListController', WishListController)
.component('wishList', {
    templateUrl:'components/wish-list/company.template.html',
    controller: 'WishListController'
});

function WishListController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('WishList component');
    }
}

function WishListConfig($stateProvider) {
    var wishesState = {
        name: 'wishes',
        url: '/wish-list',
        component: 'wishList'
    }
    $stateProvider.state(wishesState);
}
