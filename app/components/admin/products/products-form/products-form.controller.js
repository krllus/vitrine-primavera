angular
.module('admin.products')
.controller('ProductFormController', ProductFormController);

function ProductFormController(ProductsService, $state) {
    var ctrl = this;

    ctrl.currentNavItem = 'categories';

    ctrl.$onInit = function() {

        console.log(ctrl.product);

        ctrl.isNew = (ctrl.product === undefined);
        if(ctrl.isNew){
            console.log('product new component');
        }else{
            ctrl.oldCategoryId = ctrl.product.catId;
            console.log('product edit component');
        }
    };

    ctrl.save = function() {
        if(ctrl.isNew){
            ProductsService.addProduct(ctrl.product).then(function(){
                ctrl.back();
            });
        } else{
            ProductsService.saveProduct(ctrl.product, ctrl.oldCategoryId).then(function(){
                ctrl.back();
            });
        }
    };

    ctrl.remove = function() {
        ProductsService.removeProduct(ctrl.product).then(function(){
            ctrl.back();
        });
    };

    ctrl.back = function() {
        $state.go('admin.products');
    };
}
