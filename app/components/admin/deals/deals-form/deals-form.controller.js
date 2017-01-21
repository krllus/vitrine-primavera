angular
    .module('admin.deals')
    .controller('DealsFormController', DealsFormController);

function DealsFormController(DealsService, $state) {
    var ctrl = this;

    ctrl.$onInit = function() {

        ctrl.isNew = (ctrl.deal === undefined);
        if(ctrl.isNew){
            console.log('deal new component');
        }else{
            console.log('deal edit component');
        }
    };

    ctrl.saveDeal = function() {
        if(ctrl.isNew){
            DealsService.addDeal(ctrl.deal).then(function () {
                ctrl.back();
            });
        } else{
            DealsService.saveDeal(ctrl.deal).then(function () {
                ctrl.back();
            });
        }
    };

    ctrl.cancel = function () {
        //TODO show confirm cancel dialog
        ctrl.back();
    };

    ctrl.back = function() {
        $state.go('admin.deals.list');
    };
}
