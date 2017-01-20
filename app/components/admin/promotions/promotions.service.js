angular
    .module('admin.promotions')
    .service('PromotionsService', PromotionsService);

function PromotionsService($firebaseObject, $firebaseArray) {
    const promotionsRef = firebase.database().ref().child('promotions');

    var service = this;

    service.fetchPromotions = function () {
        return $firebaseArray(promotionsRef).$loaded();
    };

    service.fetchPromotion = function(promotionId){
        var promo_ref = promotionsRef.child(promotionId);
        return $firebaseObject(promo_ref).$loaded();
    };
}