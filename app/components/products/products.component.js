angular
.module('products')
.config(ProductsConfig)
.controller('ProductsController', ProductsController)
.component('products', {
    templateUrl:'components/products/products.template.html',
    controller: 'ProductsController'
});

function ProductsController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('Products component');
    }
}

function ProductsConfig($stateProvider){
    var productsState = {
        name: 'products',
        url: '/products',
        component: 'products'
    }
    $stateProvider.state(productsState);
}
