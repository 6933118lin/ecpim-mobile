/**
 * Created by QiYue-Lin on 2016/5/7.
 */

define(['jquery', '../views/LoginView', 'jquerymobile'], function($, LoginView){
    var LoginController = function () {
        var curView = new LoginView({el: '#p-login'});
        curView.render();
        $.mobile.changePage('#p-login');
    };
    return LoginController;
});
