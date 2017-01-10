angular
.module('admin.showcase')
.config(ShowcaseConfig)
.controller('ShowcaseController', ShowcaseController)
.component('showcase', {
    templateUrl:'components/admin/showcase/showcase.template.html',
    controller: 'ShowcaseController'
});

function ShowcaseController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('Showcase component');
    }
}

function ShowcaseConfig($stateProvider) {
    var state = {
        name: 'admin.showcase',
        url: '/vitrine',
        component: 'showcase'
    };

    $stateProvider.state(state);
}
