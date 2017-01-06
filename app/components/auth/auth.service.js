angular
.module('auth')
.service('AuthService', AuthService);

function AuthService($firebaseObject, $firebaseAuth) {
    var ref = firebase.database().ref().child('users');
    var auth = $firebaseAuth();
    var authData = null;

    this.login = function (email, password) {
        return auth
        .$signInWithEmailAndPassword(email, password)
        .then(function (response) {
            authData = response;
            return authData;
        });
    };

    this.logout = function () {
        return auth
        .$signOut()
        .then(function () {
            authData = null;
        });
    };

    this.requireAuthentication = function () {
        return auth
        .$waitForSignIn()
        .then(function (user) {
            authData = user;
            return auth.$requireSignIn();
        });
    };

    this.onStateChanged = function(callback) {
        return auth
        .$onAuthStateChanged(callback);
    };

    this.isAuthenticated = function () {
        return !!authData;
    };

    this.getUserData = function() {
        var ref_user = ref.child(authData.uid);
        return $firebaseObject(ref_user).$loaded();
    };
}
