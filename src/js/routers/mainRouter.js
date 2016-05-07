/**
 * Created by Qiyue-Lin on 2016/5/7.
 */

define(["jquery", "backbone"], function($, Backbone){
    var MainRouter = Backbone.Router.extend({
        initialize: function(){
            Backbone.history.start();
        },
        routes: {
            LoginModule: "LoginModule"
        },
        LoginModule: function(){
            $.mobile.changePage("../view/loginView.html");
        }
    });
    return MainRouter;
});
