angular
    .module('admin.company')
    .service('CompanyService', CompanyService);

function CompanyService($firebaseObject, $firebaseArray) {
    const storeRef = firebase.database().ref().child('store');
    const phonesRef = storeRef.child('phones');

    this.fetchStore = function () {
        console.log('downloading store');
        return $firebaseObject(storeRef).$loaded();
    };

    this.fetchPhones = function () {
        console.log('downloading phone');
        return $firebaseArray(phonesRef).$loaded();
    };

    this.savePhone = function (phones, phone) {
        return phones.$save(phone).then(function () {
            console.log('phone: save with success');
        }).catch(function (error) {
            console.error('phone: save error, ' + error);
        });
    };

    this.addPhone = function (phones,phone) {
        return phones.$add(phone).then(function() {
            console.log("phone: add com sucesso");
        }).catch(function(error) {
            console.error("phone: add ao remove: " + error);
        });
    };

    this.removePhone = function (phones,phone) {
        return phones.$remove(phone).then(function() {
            console.log("phone: remove com sucesso");
        }).catch(function(error) {
            console.error("phone: erro ao remove: " + error);
        });
    };

    this.saveStore = function (store) {
        console.log('saving store');
        return store.$save(store).then(function() {
            console.log("store: salvou com sucesso");
        }).catch(function(error) {
            console.error("store: erro ao salvar: " + error);
        });
    };

}