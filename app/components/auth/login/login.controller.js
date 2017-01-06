angular
  .module('auth')
  .controller('LoginController', LoginController);

  function LoginController(AuthService, $state) {
    var ctrl = this;
    ctrl.error = false;

    ctrl.login = function() {
      AuthService.login(ctrl.email, ctrl.password)
        .then(function(user) {
          ctrl.error = false;
          $state.go('home');
        }).catch(function(error) {
          console.error("Authentication failed:", error);
          ctrl.error = true;
        });
      };
}
