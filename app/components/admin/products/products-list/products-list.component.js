angular
.module('admin.products')
.component('productsList', ProductsListComponent())
.config(ProductsListConfig);

function ProductsListComponent() {
    return {
        templateUrl: 'components/admin/products/products-list/products-list.template.html',
        controller: 'ProductsListController',
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
        component: 'productsList',
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
