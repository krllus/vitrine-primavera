angular
    .module('admin.deals')
    .component('deals', DealsComponent())
    .config(DealsConfig);

function DealsComponent() {
    return {
        template: '<ui-view autoscroll></ui-view>'
    };
}

function DealsConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("/admin/promoções", "/admin/promoções/lista");
    $urlRouterProvider.when("admin.deals", "/admin/promoções/lista");

    var state = {
        abstract: true,
        name: 'admin.deals',
        url: '/promoções',
        component: 'deals'
    };

    $stateProvider.state(state);
}
