angular
.module('admin.company')
.config(CompanyConfig)
.controller('CompanyController', CompanyController)
.component('company', {
    templateUrl:'components/admin/company/company.template.html',
    controller: 'CompanyController',
    bindings:{
        store: '<',
        phones: '<'
    }
});

function CompanyController(CompanyService){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('company component');
    };

    this.saveAll = function () {
        console.log('saving all');
        ctrl.store.phones = toObject(ctrl.phones);

        CompanyService.saveStore(ctrl.store);
    };

    this.removePhone = function (phone) {
        CompanyService.removePhone(phone);
    };

    this.addPhone = function () {
        ctrl.phone.priority = ctrl.phones.length + 1;
        CompanyService.addPhone(ctrl.phone);

        ctrl.phone = undefined;
    };

    var toObject = function (array) {
        var obj = {};

        for (var i = 0; i < array.length; i++) {
            var id = array[i].$id;
            obj[id] = array[i];
        }

        return obj;
    }

}

function CompanyConfig($stateProvider) {
    var state = {
        name: 'admin.company',
        url: '/empresa',
        component: 'company',
        resolve:{
            store: function (CompanyService) {
                return CompanyService.fetchStore();
            },
            phones: function(CompanyService){
                return CompanyService.fetchPhones();
            }
        }
    };

    $stateProvider.state(state);
}
