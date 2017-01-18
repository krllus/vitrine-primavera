angular
.module('admin.products')
.controller('CategoriesFormController', CategoriesFormController);

function CategoriesFormController(ProductsService, $state) {
    var ctrl = this;

    ctrl.$onInit = function() {
        ctrl.isNew = (ctrl.category === undefined);
        console.log('category new component');
    };

    ctrl.saveCategory = function() {
        if(ctrl.isNew){
            ProductsService.addCategory(ctrl.category).then(function(){
                ctrl.back();
            });
        } else{
            ProductsService.saveCategory(ctrl.category).then(function(){
                ctrl.back();
            });
        }
    };

    ctrl.cancel = function () {
        //TODO show confirm cancel dialog
        ctrl.back();
    };

    ctrl.back = function() {
        $state.go('admin.products.list');
    };
}
