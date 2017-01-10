angular
.module('showcase')
.config(ShowcaseConfig)
.controller('ShowcaseController', ShowcaseController)
.component('showcase', {
    templateUrl:'components/showcase/company.template.html',
    controller: 'ShowcaseController'
});

function ShowcaseController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('Showcase component');
    }
}

function ShowcaseConfig($stateProvider){
    var homeState = {
        name: 'showcase',
        url: '/showcase',
        component: 'showcase'
    };
    $stateProvider.state(homeState);
}
