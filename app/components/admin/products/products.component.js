angular
.module('admin.products')
.component('products', ProductsComponent)
.config(ProductsConfig);

function ProductsComponent() {
    return {
        template: '<ui-view autoscroll></ui-view>'
    };
}

function ProductsConfig($stateProvider) {
    var state = {
        name: 'admin.products',
        url: '/produtos',
        component: 'products',
        redirectTo: 'admin.products.list'
    };

    $stateProvider.state(state);
}
