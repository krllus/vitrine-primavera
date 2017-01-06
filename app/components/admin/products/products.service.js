angular
.module('admin.products')
.service('ProductsService', ProductsService);

function ProductsService($firebaseObject, $firebaseArray) {
    const ref = firebase.database().ref().child('products');

    this.fetchAll = function() {
        return $firebaseArray(ref).$loaded();
    };

    this.fetch = function(id) {
        var refProduct = ref.child(id);
        return $firebaseObject(refProduct).$loaded();
    };

    this.add = function(product) {
        return $firebaseArray(ref)
        .$add(product);
    };

    this.save = function(product) {
        return product.$save();
    };

    this.remove = function(product) {
        return product.$remove();
    };
}
