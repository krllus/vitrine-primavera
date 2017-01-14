angular
.module('admin.products')
.component('categories-form', CategoriesFormComponent())
.config(CategoriesFormConfig);

function CategoriesFormComponent() {
    return {
        templateUrl: 'components/admin/products/categories-form/categories-form.template.html',
        controller: 'CategoriesFormController',
        bindings: {
            category: '<'
        }
    };
}

function CategoriesFormConfig($stateProvider) {
    $stateProvider
    .state({
        name: 'admin.products.category-new',
        url: '/categoria-nova',
        component: 'categories-form'
    })
    .state({
        name: 'admin.products.category-edit',
        url: '/categoria-editar/:id',
        component: 'categories-form',
        resolve: {
            category: function($transition$, ProductsService){
                return ProductsService.fetchCategory($transition$.params().id);
            }
        }
    });
}
