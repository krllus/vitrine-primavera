angular
    .module('admin.deals')
    .component('dealsList', DealsListComponent())
    .config(DealsListConfig);

function DealsListComponent() {
    return {
        templateUrl: 'components/admin/deals/deals-list/deals-list.template.html',
        controller: 'DealsListController',
        bindings:{
            deals: '<'
        }
    };
}

function DealsListConfig($stateProvider) {

    $stateProvider
    .state({
        name: 'admin.deals.list',
        url: '/lista',
        component: 'dealsList',
        resolve: {
            deals: function (DealsService) {
                return DealsService.fetchDeals();
            }
        }
    });
}

