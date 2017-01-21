angular
    .module('admin.deals')
    .service('DealsService', DealsService);

function DealsService($firebaseObject, $firebaseArray) {
    const dealsRef = firebase.database().ref().child('deals');

    var service = this;

    service.fetchDeals = function () {
        return $firebaseArray(dealsRef).$loaded();
    };

    service.fetchDeal = function(dealId){
        var deal_ref = dealsRef.child(dealId);
        return $firebaseObject(deal_ref).$loaded();
    };

    service.addDeal = function (deal) {
        return $firebaseArray(dealsRef).$add(deal).then(function () {
            console.log('deal add success');
        }).catch(function (error) {
            console.error('error add deal: ' + error);
        });
    };

    service.saveDeal = function (deal) {
        return deal.$save(deal).then(function () {
            console.log('deal save success');
        }).catch(function (error) {
            console.error('deal save error' + error);
        });
    };
}