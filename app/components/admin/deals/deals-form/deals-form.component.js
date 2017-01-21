angular
    .module('admin.deals')
    .component('dealsForm', DealsFormComponent())
    .config(DealsFormConfig);

function DealsFormComponent() {
    return {
        templateUrl: 'components/admin/deals/deals-form/deals-form.template.html',
        controller: 'DealsFormController',
        bindings: {
            deal: '<'
        }
    };
}

function DealsFormConfig($stateProvider) {
    $stateProvider
    .state({
        name: 'admin.deals.newDeal',
        url: '/nova-promoção',
        component: 'dealsForm'
    })
    .state({
        name: 'admin.deals.editDeal',
        url: '/editar-promoção/:id',
        component: 'dealsForm',
        resolve: {
            deal: function($transition$, DealsService){
                return DealsService.fetchDeal($transition$.params().id);
            }
        }
    });
}
