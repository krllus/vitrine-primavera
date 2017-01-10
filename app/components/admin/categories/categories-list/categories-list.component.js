angular
.module('admin.categories')
.component('categoriesList', CampusesListComponent())
.config(CampusesListConfig);

function CampusesListComponent() {
    return {
        templateUrl: './campuses-list.html',
        controller: 'CategoriesListController',
        bindings: {
            categories: '<'
        }
    };
}

function CampusesListConfig($stateProvider) {
    var state = {
        name: 'admin.categories.list',
        parent: 'admin.categories',
        url: '/list',
        component: 'categoriesList',
        resolve: {
            categories: function(CategoriesService) {
                return CategoriesService.fetchAll();
            }
        }
    };

    $stateProvider.state(state);
}
