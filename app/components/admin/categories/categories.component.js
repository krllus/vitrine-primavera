angular
.module('admin.categories')
.component('categories', CampusesComponent())
.config(CampusesConfig);

function CampusesComponent() {
    return {
        template: '<ui-view autoscroll></ui-view>'
    };
}

function CampusesConfig($stateProvider) {
    var state = {
        name: 'admin.categories',
        parent: 'admin',
        url: '/admin/categories',
        component: 'categories',
        redirectTo: 'admin.categories.list'    
    };

    $stateProvider.state(state);
}
