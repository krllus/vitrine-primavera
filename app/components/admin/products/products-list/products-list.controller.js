angular
.module('admin.products')
.controller('ProductsListController', ProductsListController);

function ProductsListController(ProductsService, $state) {
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('Products list component');
    };

    ctrl.currentNavItem = 'categories';
}
