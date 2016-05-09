/**
 * Created by ceprei2598 on 2016/5/9.
 */

define(['text!../html/MainView.html', 'jquery', 'jquerymobile'], function (MainView, $) {
    var MainViewCodeBehind = function () {
        var self = this;

        this.doLoginViewJump = function () {
            if($('#page-login').html() === ""){
                require(['LoginViewCodeBehind', 'jquery', 'jquerymobile'], function (LoginViewCodeBehind, $) {
                    new LoginViewCodeBehind();
                });
            }else{
                location.hash = "#page-login";
            }
        };
        this.doInputSearchFocusHandler = function () {
            if($('#page-prdorcosearch').html() === ""){
                require(["PrdOrCoSearchCodeBehind", 'jquery', 'jquerymobile'], function (PrdOrCoSearchCodeBehind, $) {
                    new PrdOrCoSearchCodeBehind();
                });
            }else{
                location.hash = "#page-prdorcosearch";
            }
        };
        $(function () {
            $('#page-main').html(MainView);
            $('#page-main').trigger('create');
            $('#MainView-btn-login').on('click', self.doLoginViewJump)
            $('#input-search').on('focus', self.doInputSearchFocusHandler);
        });
    };
    return MainViewCodeBehind;
});
