angular
.module('admin.categories')
.component('categoriesComponent', CategoriesComponent)
.config(CategoriesConfig);

function CategoriesComponent() {
  return {
    template: '<ui-view autoscroll></ui-view>'
  };
}

function CategoriesConfig($stateProvider) {
    var state = {
        name: 'admin.categories',
        parent: 'admin',
        url: '/categories'
    };

    $stateProvider.state(state);
}
