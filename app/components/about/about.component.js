angular
.module('about')
.config(AboutConfig)
.controller('AboutController', AboutController)
.component('about', {
    templateUrl:'components/about/about.template.html',
    controller: 'AboutController'
});

function AboutController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('About component');
    }

    const storeRef = firebase.database().ref().child('store');
    const phonesRef = storeRef.child('phones');

    this.store = $firebaseObject(storeRef);
    this.storePhones = $firebaseArray(phonesRef);
}

function AboutConfig($stateProvider){
    var aboutState = {
        name: 'about',
        url: '/about',
        component: 'about'
    }

    $stateProvider.state(aboutState);
}
