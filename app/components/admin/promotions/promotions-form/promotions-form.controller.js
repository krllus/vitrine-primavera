angular
    .module('admin.promotions')
    .controller('PromotionsFormController', PromotionsFormController());

function PromotionsFormController(PromotionsService, $state) {
    var ctrl = this;

    ctrl.$onInit = function() {

        ctrl.isNew = (ctrl.promotion === undefined);
        if(ctrl.isNew){
            console.log('promotion new component');
        }else{
            console.log('promotion edit component');
        }
    };

    ctrl.saveProduct = function() {
        if(ctrl.isNew){

        } else{

        }
    };

    ctrl.cancel = function () {
        //TODO show confirm cancel dialog
        ctrl.back();
    };

    ctrl.back = function() {
        $state.go('admin.promotions.list');
    };
}
