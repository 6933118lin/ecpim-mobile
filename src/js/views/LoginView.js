/**
 * Created by Qiyue-Lin on 2016/5/7.
 */

define(['text!html/LoginView.html', 'jquery', 'jquerymobile'], function (loginHTML, $) {
   var LoginView = Backbone.View.extend({
        initialize: function () {

        },
       events: {
           'click #btn-login': "doLoginHandler",
           'click #btn-back': "doBackHandler"
       },

       render: function () {
            this.$el.html(loginHTML);
       },

       doLoginHandler: function () {
            alert('存在多次绑定事件bug');
       },

       doBackHandler: function () {
           location.hash = "#Main";
       }
   });
    return LoginView;
});
