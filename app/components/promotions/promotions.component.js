angular
.module('promotions')
.component('promotions', {
    templateUrl:'components/promotions/promotions.template.html',
    controller: function CompanyInfoController($firebaseObject, $firebaseArray){

        var ctrl = this;
        ctrl.$onInit = function(){
            console.log('promotions component');
        }
    }
});
