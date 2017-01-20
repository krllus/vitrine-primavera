angular
.module('admin.promotions')
.controller('PromotionsListController', PromotionsListController);

function PromotionsListController(PromotionsService, $state) {
    var ctrl = this;

    ctrl.$onInit = function(){
        console.log('Promotions list component');
    };

    ctrl.navItems = [
        {value: "promotions", label: "Promoções", newLabel: "Nova Promoção"}
    ];

    ctrl.currentNavItem = ctrl.navItems[0].value;
    ctrl.newItemLabel = ctrl.navItems[0].newLabel;

    ctrl.newItem = function () {
        switch (ctrl.currentNavItem){
            case "promotions":
                $state.go('admin.promotions.newPromotion');
                break;
        }
    };

    ctrl.editPromotion = function(promotionId){
        $state.go("admin.promotions.editPromotion", {id: promotionId});
    };
}
