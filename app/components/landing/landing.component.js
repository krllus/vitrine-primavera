angular
.module('landing')
.config(LandingConfig)
.controller('LandingController', LandingController)
.component('landing', {
    templateUrl:'components/landing/landing.template.html',
    controller: 'LandingController'
});

function LandingController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('landing component');
    };

    const storeRef = firebase.database().ref().child('store');
    this.store = $firebaseObject(storeRef);
}

function LandingConfig($stateProvider){
    var adminState = {
        name: 'landing',
        url: '/',
        component: 'landing'
    };
    $stateProvider.state(adminState);
}
