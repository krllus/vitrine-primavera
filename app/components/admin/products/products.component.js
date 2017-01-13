angular
.module('admin.products')
.config(ProductsConfig)
.controller('ProductsController', ProductsController)
.component('products', {
    templateUrl:'components/admin/products/products.template.html',
    controller: 'ProductsController',
    bindings:{
        products: '<',
        categories: '<'
    }
});

function ProductsController(ProductsService){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('Products component');
    };

    ctrl.currentNavItem = 'products';

    ctrl.removeProduct = function (product) {
        ProductsService.removeProduct(ctrl.products, product);
    };

    ctrl.removeCategory = function (category) {
        ProductsService.removeCategory(ctrl.categories, category);
    };

    ctrl.addCategory = function () {
        ProductsService.addCategory(ctrl.categories, ctrl.category);
        ctrl.category = undefined;
    }

}

function ProductsConfig($stateProvider) {
    var state = {
        name: 'admin.products',
        url: '/produtos',
        component: 'products',
        resolve:{
            products: function (ProductsService) {
                return ProductsService.fetchProducts();
            },
            categories: function (ProductsService) {
                return ProductsService.fetchCategories();
            }
        }
    };




    $stateProvider.state(state);
}
