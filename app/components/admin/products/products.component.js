angular
.module('admin.products')
.component('products', CampusesComponent())
.config(CampusesConfig);

function CampusesComponent() {
    return {
        template: '<ui-view autoscroll></ui-view>'
    };
}

function CampusesConfig($stateProvider) {
    var state = {
        name: 'admin.products',
        parent: 'admin',
        url: '/admin/products',
        component: 'products',
        redirectTo: 'admin.products.list'
    };

    $stateProvider.state(state);
}
