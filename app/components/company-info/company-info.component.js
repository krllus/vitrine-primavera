angular
.module('companyInfo', [
    'firebase'
])
.component('companyInfo', {
    templateUrl:'components/company-info/company-info.template.html',
    controller: function CompanyInfoController($firebaseObject, $firebaseArray){

        const storeRef = firebase.database().ref().child('store');
        const phonesRef = storeRef.child('phones');

        this.store = $firebaseObject(storeRef);
        this.storePhones = $firebaseArray(phonesRef);
    }
});
