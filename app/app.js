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
        'ngMaterial',
        'home',
        'products',
        'promotions',
        'wishList',
        'about',
        'auth'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

}());
