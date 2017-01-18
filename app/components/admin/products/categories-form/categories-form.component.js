angular
.module('admin.products')
.component('categoriesForm', CategoriesFormComponent())
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
        name: 'admin.products.newCategory',
        url: '/nova-categoria',
        component: 'categoriesForm'
    })
    .state({
        name: 'admin.products.editCategory',
        url: '/editar-categoria/:id',
        component: 'categoriesForm',
        resolve: {
            category: function($transition$, ProductsService){
                return ProductsService.fetchCategory($transition$.params().id);
            }
        }
    });
}
