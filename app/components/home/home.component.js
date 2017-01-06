angular
.module('home')
.config(HomeConfig)
.controller('HomeController', HomeController)
.component('home', {
    templateUrl:'components/home/home.template.html',
    controller: 'HomeController'
});

function HomeController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('Home component');
    }
}

function HomeConfig($stateProvider){
    var homeState = {
        name: 'home',
        url: '/home',
        component: 'home'
    };
    $stateProvider.state(homeState);
}
