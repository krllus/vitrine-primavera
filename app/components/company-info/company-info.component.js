angular
.module('companyInfo', [
    'firebase'
])
.component('companyInfo', {
    template: '<h1>teste</h1>',
    //templateUrl:'./company-info.template.html',
    controller: function CompanyInfoController($firebaseObject, $firebaseArray){

        var ctrl = this;
        ctrl.$onInit = function(){
            console.log('teste');
        }

        const storeRef = firebase.database().ref().child('store');
        const phonesRef = storeRef.child('phones');

        this.store = $firebaseObject(storeRef);
        this.storePhones = $firebaseArray(phonesRef);
    }
});
