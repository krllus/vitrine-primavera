angular
.module('admin.products')
.component('products', ProductsComponent())
.config(ProductsConfig);

function ProductsComponent() {
    return {
        template: '<ui-view autoscroll></ui-view>'
    };
}

function ProductsConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("/admin/produtos", "/admin/produtos/lista");
    $urlRouterProvider.when("admin.products", "/admin/produtos/lista");

    var state = {
        abstract: true,
        name: 'admin.products',
        url: '/produtos',
        component: 'products'
    };

    $stateProvider.state(state);
}
