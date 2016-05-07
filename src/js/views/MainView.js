/**
 * Created by Qiyue-Lin on 2016/5/7.
 */

define(['text!html/mainView.html', 'jquery'], function (mainHTML, $) {
    var LoginView = Backbone.View.extend({
        initialize: function () {

        },
        events: {

        },

        render: function () {
            this.$el.html(mainHTML);
        }
    });
    return LoginView;
});
