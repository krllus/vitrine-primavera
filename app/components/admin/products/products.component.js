angular
.module('admin.products')
.config(ProductsConfig)
.controller('ProductsController', ProductsController)
.component('products', {
    templateUrl:'components/admin/products/products.template.html',
    controller: 'ProductsController'
});

function ProductsController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('Products component');
    }
}

function ProductsConfig($stateProvider) {
    var state = {
        name: 'admin.products',
        url: '/produtos',
        component: 'products'
    };

    $stateProvider.state(state);
}
