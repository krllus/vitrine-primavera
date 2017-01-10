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
    const phonesRef = storeRef.child('phones');

    this.store = $firebaseObject(storeRef);
    this.phones = $firebaseArray(phonesRef);

    this.save = function(){
        this.saveStore(store);
    };

    this.saveStore = function(store){
        store.$save().then(function() {
            console.log("salvou com sucesso");
        }).catch(function(error) {
            console.log("erro ao salvar");
        });
    };

}

function CompanyConfig($stateProvider) {
    var state = {
        name: 'admin.company',
        url: '/empresa',
        component: 'company'
    };

    $stateProvider.state(state);
}
