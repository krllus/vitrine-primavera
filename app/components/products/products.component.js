angular
.module('products')
.component('products', {
    templateUrl:'components/products/products.template.html',
    controller: function CompanyInfoController($firebaseObject, $firebaseArray){

        var ctrl = this;
        ctrl.$onInit = function(){
            console.log('Products component');
        }
    }
});
