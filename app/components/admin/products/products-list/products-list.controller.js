angular
.module('admin.products')
.controller('ProductsListController', ProductsListController);

function ProductsListController(ProductsService, $state) {
    var ctrl = this;

    ctrl.$onInit = function(){
        console.log('Products list component');
    };

    ctrl.navItems = [
        {value: "products", label: "Produtos", newLabel: "Novo Produto"},
        {value: "categories", label: "Categorias", newLabel: "Nova Categoria"}
    ];

    ctrl.currentNavItem = ctrl.navItems[0].value;
    ctrl.newItemLabel = ctrl.navItems[0].newLabel;

    ctrl.updateAddItemLabel = function (item) {
        console.log('changing add item label to : ' + item.newLabel);
        ctrl.newItemLabel = item.newLabel;
    };

    ctrl.newItem = function () {
        console.log('going to a new state');
        switch (ctrl.currentNavItem){
            case "products":
                $state.go('^.newProduct');
                break;
            case "categories":
                $state.go('^.newCategory');
                break;
        }
    };

    ctrl.editProduct = function(productId){
        $state.go('admin.products.editProduct', {id: productId});
    };

    ctrl.editCategory = function(categoryId){
        $state.go('admin.products.editCategory', {id: categoryId});
    }
}
