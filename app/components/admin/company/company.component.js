angular
.module('admin.company')
.config(CompanyConfig)
.controller('CompanyController', CompanyController)
.component('company', {
    templateUrl:'components/admin/company/company.template.html',
    controller: 'CompanyController'
});

function CompanyController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('company component');
    };

    const storeRef = firebase.database().ref().child('store');
    this.store = $firebaseObject(storeRef);


}

function CompanyConfig($stateProvider) {
    var state = {
        name: 'admin.company',
        url: '/empresa',
        component: 'company'
    };

    $stateProvider.state(state);
}
