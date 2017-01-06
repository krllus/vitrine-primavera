angular
.module('auth')
.component('login', LoginComponent())
.config(LoginConfig);

function LoginComponent() {
    return {
        templateUrl: 'components/auth/login/login.template.html',
        controller: 'LoginController'
    };
}

function LoginConfig($stateProvider) {
    $stateProvider
    .state('login', {
        name: 'login',
        url: '/login',
        component: 'login',
    });
}
