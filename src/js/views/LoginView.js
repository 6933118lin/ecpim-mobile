/**
 * Created by Qiyue-Lin on 2016/5/7.
 */

define(['text!html/loginView.html', 'jquery'], function (loginHTML, $) {
   var LoginView = Backbone.View.extend({
        initialize: function () {

        },
       events: {
           'click #btn-login': "doLoginHandler"
       },

       render: function () {
            this.$el.html(loginHTML);
       },

       doLoginHandler: function () {
            alert('click login');
       }
   });
    return LoginView;
});
