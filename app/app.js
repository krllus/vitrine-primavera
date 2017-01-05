(function (){
    'use strict';

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDoZ2LtHJv-UJcQrRef71lbKPAvFgpAdSg",
        authDomain: "vitrine-primavera.firebaseapp.com",
        databaseURL: "https://vitrine-primavera.firebaseio.com",
        storageBucket: "vitrine-primavera.appspot.com",
        messagingSenderId: "927640005513"
    };

    firebase.initializeApp(config);

    angular
    .module('vitrinePrimaveraApp', [
        'ui.router',
        'companyInfo'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'partial-home.html'
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            component: 'companyInfo'
        }

        var promoState = {
            name: 'promo',
            url: '/promotions',
            templateUrl: 'partial-promo.html'
        }

        $stateProvider.state(homeState);
        $stateProvider.state(promoState);
        $stateProvider.state(aboutState);

    });

}());
