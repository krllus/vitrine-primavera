angular
.module('admin')
.config(AdminConfig)
.controller('AdminController', AdminController)
.component('admin', {
    templateUrl:'components/admin/admin.template.html',
    controller: 'AdminController'
});

function AdminController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('admin component');
    }
}

function AdminConfig($stateProvider){
    var adminState = {
        name: 'admin',
        url: '/admin',
        component: 'admin'
    };
    $stateProvider.state(adminState);
}
