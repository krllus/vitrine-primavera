angular
    .module('admin.promotions')
    .component('promotions', PromotionsComponent())
    .config(PromotionsConfig);

function PromotionsComponent() {
    return {
        template: '<ui-view autoscroll></ui-view>'
    };
}

function PromotionsConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("/admin/promoções", "/admin/promoções/lista");
    $urlRouterProvider.when("admin.promotions", "/admin/promoções/lista");

    var state = {
        abstract: true,
        name: 'admin.promotions',
        url: '/promoções',
        component: 'promotions'
    };

    $stateProvider.state(state);
}
