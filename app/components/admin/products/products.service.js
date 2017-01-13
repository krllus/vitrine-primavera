angular
    .module('admin.products')
    .service('ProductsService', ProductsService);

function ProductsService($firebaseObject, $firebaseArray) {
    const categoriesRef = firebase.database().ref().child('categories');
    const productsRef = firebase.database().ref().child('products');

    const catProdRef = firebase.database().ref().child('categoryProducts');

    this.fetchCategories = function () {
        console.log('downloading categories');
        return $firebaseArray(categoriesRef).$loaded();
    };

    this.fetchProducts = function () {
        console.log('downloading products');
        return $firebaseArray(productsRef).$loaded();
    };

    this.fetchProductsInCategory = function (categoryId) {
        console.log('fetching Products in category');
        var ref = catProdRef.child(categoryId);
        return $firebaseArray(ref).then(function () {
            console.error('remove category success');
        }).catch(function (error) {
            console.error('remove category error: ' + error);
        });
    };

    this.addCategory = function(categories, category){
        return categories.$add(category).then(function () {
            console.log('category add success');
        }).catch(function (error) {
            console.error('error add category: ' + error);
        });
    };

    this.removeCategory = function (categories, category) {
        // remove products in that category
        // fetch products in that catagory
        //var prodList = this.fetchProductsInCategory(category.$id);
        //console.log(prodList);

        // remove category
        return categories.$remove(category).then(function () {
            console.error('remove category success');
        }).catch(function (error) {
            console.error('remove category error: ' + error);
        });
    };

    this.removeProduct = function (products, product) {
        return products.$remove(product).then(function () {
            console.error('remove product success');
        }).catch(function (error) {
            console.error('remove product error: ' + error);
        });
    };

    this.removeProductList = function (productsList) {
        var prods = this.fetchProducts().then(function () {
            for (var p in productsList) {
                prods.$remove(p).then(function () {
                    console.error('product removed ');
                }).catch(function (error) {
                    console.error('remove product list error: ' + error);
                });
            }
        });
    }
}