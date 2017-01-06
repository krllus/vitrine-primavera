angular
.module('promotions')
.config(PromotionsConfig)
.controller('PromotionsController', PromotionsController)
.component('promotions', {
    templateUrl:'components/promotions/promotions.template.html',
    controller: 'PromotionsController'

});

function PromotionsController($firebaseObject, $firebaseArray){
    var ctrl = this;
    
    ctrl.$onInit = function(){
        console.log('promotions component');
    }
}

function PromotionsConfig($stateProvider){
    var promoState = {
        name: 'promotions',
        url: '/promotions',
        component: 'promotions'
    }
    $stateProvider.state(promoState);
}
