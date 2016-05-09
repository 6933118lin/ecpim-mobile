/**
 * Created by Qiyue-Lin on 2016/5/7.
 */

define(['text!html/MainView.html', 'jquery', 'jqueryslider'], function (mainHTML, $, slider) {
    var LoginView = Backbone.View.extend({
        initialize: function () {

        },
        events: {
            "focus #input-search": "inputSearchFocusHandler"
        },

        render: function () {
            this.$el.html(mainHTML);
            slider({
                "JQuerySlideTransition": "JQuerySlideTransition",
                "JQuerySlideWrapper": $(".JQuerySlideWrapper"),
                "JQuerySlide": $(".JQuerySlide"),
                "JQuerySlide_img": $(".JQuerySlide_img"),
                "timerNum": 3000
            });
        },

        inputSearchFocusHandler: function(){
            location.hash = "#PrdOrCoSearchView";
        }
    });
    return LoginView;
});
