angular
.module('admin.products')
.component('productsForm', ProductsFormComponent())
.config(ProductsFormConfig);

function ProductsFormComponent() {
    return {
        templateUrl: 'components/admin/products/products-form/products-form.template.html',
        controller: 'ProductFormController',
        bindings: {
            product: '<',
            categories: '<'
        }
    };
}

function ProductsFormConfig($stateProvider) {
    $stateProvider
    .state({
        name: 'admin.products.newProduct',
        url: '/novo-produto',
        component: 'productsForm',
        resolve:{
            categories: function (ProductsService) {
                return ProductsService.fetchCategories();
            }
        }
    })
    .state({
        name: 'admin.products.editProduct',
        url: '/editar-produto/:id',
        component: 'productsForm',
        resolve: {
            product: function($transition$, ProductsService){
                return ProductsService.fetchProduct($transition$.params().id);
            },
            categories: function (ProductsService) {
                return ProductsService.fetchCategories();
            }
        }
    });
}
