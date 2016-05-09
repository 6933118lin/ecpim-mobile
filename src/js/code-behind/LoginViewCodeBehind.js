/**
 * Created by ceprei2598 on 2016/5/9.
 */

define(['text!../html/LoginView.html', 'config', 'jquery', 'jquerymobile'], function (LoginView, config, $) {
    var LoginViewCodeBehind = function () {
        var self = this;
        $(function () {
            $('#page-login').html(LoginView);
            $.mobile.changePage('#page-login');
        });
    };
    return LoginViewCodeBehind;
});
