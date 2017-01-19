angular
    .module('admin.products')
    .service('ProductsService', ProductsService);

function ProductsService($firebaseObject, $firebaseArray) {
    const categoriesRef = firebase.database().ref().child('categories');
    const productsRef = firebase.database().ref().child('products');

    const catProdRef = firebase.database().ref().child('categoryProducts');
    var service = this;

    service.fetchCategories = function () {
        console.log('downloading categories');
        return $firebaseArray(categoriesRef).$loaded();
    };

    service.fetchProducts = function () {
        console.log('downloading products');
        return $firebaseArray(productsRef).$loaded();
    };

    service.fetchCategory = function (categoryId) {
        var cat_ref = categoriesRef.child(categoryId);

        return $firebaseObject(cat_ref).$loaded();
    };

    /*
     TODO see if this can work
     service.fetchProduct = function (productId) {
     var prod_ref = productsRef.child(productId);

     return $firebaseObject(prod_ref).$loaded().then(function () {
     console.log('fetch product success');
     return product;
     }).catch(function (error) {
     console.error('fetch product error: ' + error);
     });
     };
     */

    service.fetchProduct = function (productId) {
        var prod_ref = productsRef.child(productId);

        return $firebaseObject(prod_ref).$loaded();
    };

    service.addCategory = function (category) {
        return $firebaseArray(categoriesRef).$add(category).then(function () {
            console.log('category add success');
        }).catch(function (error) {
            console.error('error add category: ' + error);
        });
    };

    service.addProduct = function (product) {
        return $firebaseArray(productsRef).$add(product).then(function (ref) {
            var productId = ref.getKey();
            service.addProductIdToCategory(product.categoryId, productId);
            console.log('product add success');
        }).catch(function (error) {
            console.error('error add product: ' + error);
        });
    };

    service.saveCategory = function (category) {
        return category.$save(category).then(function () {
            console.log('category save success');
        }).catch(function (error) {
            console.error('category save error' + error);
        });
    };

    service.saveProduct = function (product, oldCategoryId) {
        return product.$save(product).then(function (ref) {
            var prodId = ref.getKey();

            if (oldCategoryId != product.categoryId) {
                console.log('changing product category:');
                service.removeProductIdFromCategory(oldCategoryId, prodId);
                service.addProductIdToCategory(product.categoryId, prodId);
            }

            console.log('product save success');
        }).catch(function (error) {
            console.error('product save error' + error);
        });
    };

    service.removeCategory = function (category) {

        //TODO remove all products in that category

        return category.$remove(category).then(function () {
            console.log('remove category success');
        }).catch(function (error) {
            console.error('remove category error: ' + error);
        });
    };

    service.removeProduct = function (product) {
        return product.$remove(product).then(function (ref) {
            var prodId = ref.getKey();
            service.removeProductIdFromCategory(product.categoryId, prodId);
            console.log('remove product success');
        }).catch(function (error) {
            console.error('remove product error: ' + error);
        });
    };

    service.addProductIdToCategory = function (categoryId, productId) {
        var catProd = firebase.database().ref('categoryProducts').child(categoryId);

        var product = {};
        product[productId] = true;

        return catProd.update(product).then(function () {
            console.log('add product to category success');
        }).catch(function (error) {
            console.error('add product to category error: ' + error);
        });
    };

    service.removeProductIdFromCategory = function (categoryId, productId) {
        var ref = catProdRef.child(categoryId).child(productId);

        return $firebaseObject(ref).$remove().then(function () {
            console.log('remove product from category success');
        }).catch(function (error) {
            console.error('remove product from category error: ' + error);
        });
    }

}
