angular
.module('products')
.config(ProductsConfig)
.controller('ProductsController', ProductsController)
.component('products', {
    templateUrl:'components/products/products.template.html',
    controller: 'ProductsController'
});

function ProductsController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('Products component');
    }

    //download categories
    // list products of selected category
    const categoriesRef = firebase.database().ref().child('categories');
    this.categories = $firebaseArray(categoriesRef);

    const productsRef = firebase.database().ref().child('products');
    this.products = $firebaseArray(productsRef);

    this.categoryFilter = "";

}

function ProductsConfig($stateProvider){
    var productsState = {
        name: 'products',
        url: '/products',
        component: 'products'
    }
    $stateProvider.state(productsState);
}
