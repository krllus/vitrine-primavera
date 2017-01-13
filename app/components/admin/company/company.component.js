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
        CompanyService.saveStore(ctrl.store);
    };

    this.addPhone = function () {
        ctrl.phone.priority = ctrl.phones.length + 1;
        CompanyService.addPhone(ctrl.phones, ctrl.phone);

        ctrl.phone = undefined;
    };

    this.savePhone = function (phone) {
        CompanyService.savePhone(ctrl.phones, phone);
    };

    this.removePhone = function (phone) {
        CompanyService.removePhone(ctrl.phones, phone);
    };

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
