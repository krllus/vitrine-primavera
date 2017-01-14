angular
.module('admin.products')
.component('products-form', ProductsFormComponent())
.config(ProductsFormConfig);

function ProductsFormComponent() {
    return {
        templateUrl: 'components/admin/products/products-form/products-form.template.html',
        controller: 'ProductFormController',
        bindings: {
            product: '<'
        }
    };
}

function ProductsFormConfig($stateProvider) {
    $stateProvider
    .state({
        name: 'admin.products.product-new',
        url: '/produto-novo',
        component: 'products-form'
    })
    .state({
        name: 'admin.products.product-edit',
        url: '/produto-editar/:id',
        component: 'products-form',
        resolve: {
            product: function($transition$, ProductsService){
                return ProductsService.fetchProduct($transition$.params().id);
            }
        }
    });
}
