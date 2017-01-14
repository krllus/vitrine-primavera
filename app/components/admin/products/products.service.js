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

    this.fetchCategory = function(categoryId){
        var cat_ref = categoriesRef.child(categoryId);
        return $firebaseObject(cat_ref).$loaded().then(function(){
            console.log('fetch category success');
        }).catch(function (error) {
            console.error('fetch category error: ' + error);
        });
    }

    this.fetchProduct = function(productId){
        var prod_ref = productsRef.child(productId);
        return $firebaseObject(prod_ref).$loaded().then(function(){
            console.log('fetch product success');
        }).catch(function (error) {
            console.error('fetch product error: ' + error);
        });
    }

    this.addCategory = function(category){
        return $firebaseArray(categoriesRef).$add(category).then(function () {
            console.log('category add success');
        }).catch(function (error) {
            console.error('error add category: ' + error);
        });
    };

    this.addProduct = function(product){
        return $firebaseArray(productsRef).$add(product).then(function () {
            addProductToCategory(product);
            console.log('product add success');
        }).catch(function (error) {
            console.error('error add product: ' + error);
        });
    };

    this.saveCategory = function (category){
        return category.$save(category).then(function(){
            console.log('category save success');
        }).catch(function(error){
            console.error('category save error' + error);
        });
    }

    this.saveProduct = function (product, oldCategoryId){
        return product.$save(product).then(function(){
            removeProductFromCategory(oldCategoryId, product.$id);
            addProductToCategory(product);
            console.log('product save success');
        }).catch(function(error){
            console.error('product save error' + error);
        });
    }

    this.removeCategory = function (category) {
        return category.$remove(category).then(function () {
            console.log('remove category success');
        }).catch(function (error) {
            console.error('remove category error: ' + error);
        });
    };

    this.removeProduct = function (product) {
        return product.$remove(product).then(function () {
            removeProductFromCategory(product.catId, product.$id);
            console.log('remove product success');
        }).catch(function (error) {
            console.error('remove product error: ' + error);
        });
    };

    this.addProductToCategory = function(product){
        var ref = catProdRef.child(product.catId);

        //TODO check this 'p' object right here
        var id = product.$id;
        var p = {
            id: true
        };

        return $firebaseObject(ref).$save(p).then(function(){
            console.log('add product to category success');
        }).catch(function(error){
            console.error('add product to category error: ' + error );
        });
    };


    this.removeProductFromCategory = function(categoryId, productId) {
        var ref = catProdRef.child(categoryId);
        return $firebaseObject(ref).$remove(productId).then(function() {
            console.log('remove product from category success');
        }).catch(function(error){
            console.error('remove product from category error: ' + error);
        });
    }

}
