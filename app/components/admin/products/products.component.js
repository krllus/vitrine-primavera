angular
.module('admin.products')
.config(ProductsConfig)
.controller('ProductsController', ProductsController)
.component('products', {
    templateUrl:'components/admin/products/products.template.html',
    controller: 'ProductsController',
    bindings:{
        categories: '<'
    }
});

function ProductsController(ProductsService){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('Products component');
    };

    ctrl.currentNavItem = 'categories';

    ctrl.removeCategory = function (category) {
        console.log(category);
        ProductsService.removeCategory(ctrl.categories, category);
    };

    ctrl.addCategory = function () {
        ProductsService.addCategory(ctrl.category);
        ctrl.category = undefined;
    }

}

function ProductsConfig($stateProvider) {
    var state = {
        name: 'admin.products',
        url: '/produtos',
        component: 'products',
        resolve:{
            categories: function (ProductsService) {
                return ProductsService.fetchCategories();
            }
        }
    };

    $stateProvider.state(state);
}
