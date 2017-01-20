angular
    .module('admin.promotions')
    .component('promotionsForm', PromotionsFormComponent())
    .config(PromotionsFormConfig);

function PromotionsFormComponent() {
    return {
        templateUrl: 'components/admin/promotions/promotions-form/promotions-form.template.html',
        controller: 'PromotionsFormController',
        bindings: {
            promotion: '<'
        }
    };
}

function PromotionsFormConfig($stateProvider) {
    $stateProvider
    .state({
        name: 'admin.promotions.newPromotion',
        url: '/nova-promoção',
        component: 'promotionsForm'
    })
    .state({
        name: 'admin.promotions.editProduct',
        url: '/editar-promoção/:id',
        component: 'promotionsForm',
        resolve: {
            promotion: function($transition$, PromotionService){
                return PromotionService.fetchPromotion($transition$.params().id);
            }
        }
    });
}
