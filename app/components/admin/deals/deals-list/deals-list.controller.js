angular
.module('admin.deals')
.controller('DealsListController', DealsListController);

function DealsListController(DealsService, $state) {
    var ctrl = this;

    ctrl.$onInit = function(){
        console.log('deals list component');
    };

    ctrl.navItems = [
        {value: "deals", label: "Promoções", newLabel: "Nova Promoção"}
    ];

    ctrl.currentNavItem = ctrl.navItems[0].value;
    ctrl.newItemLabel = ctrl.navItems[0].newLabel;

    ctrl.newItem = function () {
        switch (ctrl.currentNavItem){
            case "deals":
                $state.go('admin.deals.newDeal');
                break;
        }
    };

    ctrl.editDeal = function(dealId){
        $state.go("admin.deals.editDeal", {id: dealId});
    };
}
