angular
.module('admin.promotions')
.config(PromotionsConfig)
.controller('PromotionsController', PromotionsController)
.component('promotions', {
    templateUrl:'components/admin/promotions/promotions.template.html',
    controller: 'PromotionsController'
});

function PromotionsController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('promotions component');
    }
}

function PromotionsConfig($stateProvider) {
    var state = {
        name: 'admin.promotions',
        url: '/promoções',
        component: 'promotions'
    };

    $stateProvider.state(state);
}
