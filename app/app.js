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
        'home',
        'products',
        'promotions',
        'wishList',
        'company'

    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        var homeState = {
            name: 'home',
            url: '/',
            component: 'home'
        };

        var productsState = {
            name: 'products',
            url: '/products',
            component: 'products'
        }

        var promoState = {
            name: 'promotions',
            url: '/promotions',
            component: 'promotions'
        }

        var wishesState = {
            name: 'wishes',
            url: '/wish-list',
            component: 'wishList'
        }

        var aboutState = {
            name: 'about',
            url: '/about',
            component: 'company'
        }

        $stateProvider.state(homeState);
        $stateProvider.state(productsState);
        $stateProvider.state(promoState);
        $stateProvider.state(wishesState);
        $stateProvider.state(aboutState);

    });

}());
