angular
.module('admin.products')
.component('products-list', ProductsListComponent)
.config(ProductsListConfig);

function ProductsListComponent() {
    return {
        templateUrl: 'components/admin/products/products-list/products-list.template.html',
        controller: 'ProductListController',
        bindings: {
            products: '<',
            categories: '<'
        }
    };
}

function ProductsListConfig($stateProvider) {

    $stateProvider
    .state({
        name: 'admin.products.list',        
        url: '/lista',
        component: 'products-list',
        resolve:{
            products: function(ProductsService){
                return ProductsService.fetchProducts();
            },
            categories: function (ProductsService) {
                return ProductsService.fetchCategories();
            }
        }
    });
}
