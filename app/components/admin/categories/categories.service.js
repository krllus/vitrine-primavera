angular
.module('admin.categories')
.service('CategoriesService', CategoriesService)

function CategoriesService($firebaseObject, $firebaseArray) {
    const ref = firebase.database().ref().child('categories');

    this.fetchAll = function() {
        return $firebaseArray(ref).$loaded();
    };

    this.fetch = function(id) {
        var refCategory = ref.child(id);
        return $firebaseObject(refCategory).$loaded();
    };

    this.add = function(category) {
        return $firebaseArray(ref)
        .$add(category);
    };

    this.save = function(category) {
        return category.$save();
    };

    this.remove = function(category) {
        return category.$remove();
    };
}
