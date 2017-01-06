angular
  .module('admin.categories')
  .controller('CategoriesListController', CategoriesListController);

function CategoriesListController($state) {
  var ctrl = this;

  ctrl.$onInit = function() {
  };

  ctrl.go = function(id) {
    $state.go('admin.categories.edit', {id: id});
  };

  ctrl.getCategory = function(id) {
    return ctrl.categories.$getRecord(id).name;
  };
}
