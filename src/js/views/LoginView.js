/**
 * Created by Qiyue-Lin on 2016/5/7.
 */

define(['text!html/loginView.html', 'jquery', 'jquerymobile'], function (loginHTML, $) {
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
            alert('click login');
       },

       doBackHandler: function () {
           location.hash = "#Main";
       }
   });
    return LoginView;
});
