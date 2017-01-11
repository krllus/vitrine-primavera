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

    this.getPhone = function (phoneId){
        var ref_phone = phonesRef.child(phoneId);
        return $firebaseObject(ref_phone).$loaded();
    };

    this.addPhone = function (phone) {
        return $firebaseArray(phonesRef)
            .$add(phone).then(function() {
                console.log("phone: add com sucesso");
            }).catch(function(error) {
                console.error("phone: add ao remove: " + error);
            });
    };

    this.removePhone = function (phone) {

        var p = this.getPhone(phone.$id).then(function () {
            console.log('phone: ' + p);
            return $firebaseArray(phonesRef).$remove(p)
                .then(function() {
                    console.log("phone: remove com sucesso");
                }).catch(function(error) {
                    console.error("phone: erro ao remove: " + error);
                });
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