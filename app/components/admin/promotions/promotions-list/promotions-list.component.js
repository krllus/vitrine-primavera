angular
    .module('admin.promotions')
    .component('promotionsList', PromotionsListComponent())
    .config(PromotionsListConfig);

function PromotionsListComponent() {
    return {
        templateUrl: 'components/admin/promotions/promotions-list/promotions-list.template.html',
        controller: 'PromotionsListController',
        bindings:{
            promotions: '<'
        }
    };
}

function PromotionsListConfig($stateProvider) {

    $stateProvider
    .state({
        name: 'admin.promotions.list',
        url: '/lista',
        component: 'promotionsList',
        resolve: {
            promotions: function (PromotionsService) {
                return PromotionsService.fetchPromotions();
            }
        }
    });
}

