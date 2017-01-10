angular
.module('admin.notifications')
.config(NotificationConfig)
.controller('NotificationController', NotificationController)
.component('notifications', {
    templateUrl:'components/admin/notifications/notifications.template.html',
    controller: 'NotificationController'
});

function NotificationController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('Notifications component');
    }
}

function NotificationConfig($stateProvider) {
    var state = {
        name: 'admin.notifications',
        url: '/notificações',
        component: 'notifications'
    };

    $stateProvider.state(state);
}
