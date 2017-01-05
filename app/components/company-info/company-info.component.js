angular
.module('company')
.component('company', {
    templateUrl:'components/company-info/company-info.template.html',
    controller: function CompanyInfoController($firebaseObject, $firebaseArray){

        var ctrl = this;
        ctrl.$onInit = function(){
            console.log('company component');
        }

        const storeRef = firebase.database().ref().child('store');
        const phonesRef = storeRef.child('phones');

        this.store = $firebaseObject(storeRef);
        this.storePhones = $firebaseArray(phonesRef);
    }
});
