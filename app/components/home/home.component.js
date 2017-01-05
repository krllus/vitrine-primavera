angular
.module('home')
.component('home', {
    templateUrl:'components/home/home.template.html',
    controller: function CompanyInfoController($firebaseObject, $firebaseArray){

        var ctrl = this;
        ctrl.$onInit = function(){
            console.log('Home component');
        }
    }
});
