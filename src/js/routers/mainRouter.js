/**
 * Created by Qiyue-Lin on 2016/5/7.
 */

define(["backbone"], function(Backbone){
    var MainRouter = Backbone.Router.extend({
        /**
         * 自定义私有属性，标志当前的正在展现的View
         */
        _currentView: "",
        /**
         * 主路由初始化方法，开始拦截所有的请求
         */
        initialize: function(){
            Backbone.history.start();
        },
        routes: {
            //不匹配任何路径，返回主页面
            "": "Main",
            //主页面
            Main: "Main",
            //产品或者厂家搜索页面
            PrdOrCoSearchView: "PrdOrCoSearchModule",
            //登陆
            LoginModule: "LoginModule"
        },
        Main: function(){
            require(['views/MainView','jquery','jquerymobile'], function (MainView, $) {
                var curView = new MainView({el: "#page-main"});
                curView.render();
                _currentView = curView;
                $.mobile.changePage('#page-main', { reverse: false, changeHash: false } );
                $("#page-main").trigger('create');
            });
        },
        PrdOrCoSearchModule: function(){
            require(['views/PrdOrCoSearchView', 'jquery', 'jquerymobile'], function (PrdOrCoSearchView, $) {
                var curView = new PrdOrCoSearchView({el: "#page-prdorcosearch"});
                curView.render();
                _currentView = curView;
                $.mobile.changePage('#page-prdorcosearch', { reverse: false, changeHash: false } );
                $("#page-prdorcosearch").trigger('create');
            });
        },
        LoginModule: function(){
            require(['views/LoginView', 'jquery', 'jquerymobile'], function(LoginView, $){
                var curView = new LoginView({el: '#page-login'});
                curView.render();
                _currentView = curView;
                $.mobile.changePage('#page-login', { reverse: false, changeHash: false });
                $("#page-login").trigger('create');
            });
        }
    });
    return MainRouter;
});
