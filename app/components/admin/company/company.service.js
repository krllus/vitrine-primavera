angular
    .module('admin.company')
    .service('CompanyService', CompanyService);

function CompanyService($firebaseObject, $firebaseArray) {
    const storeRef = firebase.database().ref().child('store');
    const phonesRef = storeRef.child('phones');

    this.fetchStore = function () {
        return $firebaseObject(storeRef).$loaded();
    };

    this.fetchPhones = function () {
        return $firebaseArray(phonesRef).$loaded();
    };


}