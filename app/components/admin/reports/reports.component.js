angular
.module('admin.reports')
.config(ReportsConfig)
.controller('ReportsController', ReportsController)
.component('reports', {
    templateUrl:'components/admin/reports/reports.template.html',
    controller: 'ReportsController'
});

function ReportsController($firebaseObject, $firebaseArray){
    var ctrl = this;
    ctrl.$onInit = function(){
        console.log('reports component');
    }
}

function ReportsConfig($stateProvider) {
    var state = {
        name: 'admin.reports',
        url: '/relatorios',
        component: 'reports'
    };

    $stateProvider.state(state);
}
