/**
 * Created by Qiyue-Lin on 2016/5/8.
 */

define(['text!html/PrdOrCoSearchView.html', 'jquery', 'config', 'jquerymobile'], function(prdOrCoSearchHTML, $, config){
    var PrdOrCoSearch = Backbone.View.extend({
        initialize:function () {

        },
        events: {
            "click #btn-search": "doSearchRouterHandler",
            "click #btn-loadMore": "doLoadMoreTouchHandler"
        },
        render: function () {
            this.$el.html(prdOrCoSearchHTML);
        },
        doSearchRouterHandler: function () {
            var searchType = $("#select-searchType").val();
            //检索类型为产品
            if(searchType == 1){
                this.doProductSearchHandler();
            //检索类型为公司
            }else if(searchType == 2){
                this.doCompanySearchHandler();
            }
        },
        doProductSearchHandler: function () {
            //清空上次搜索结果
            $('#cont-searchResult').html("");
            $.post(config.baseUrl + config.mainInfoAppSearch, {
                searchKey: $('#input-search').val()
            }, function (json) {
                var html = "";
                for(var i = 0; i < json.data.length; i++){
                    var item = json.data[i];
                    html += '<li><a href="javascript:void(0)"><img src="img/ceprei.png"><h2>' + item.name + '</h2><p>' + item.companyName+ '</p></a></li>';
                }
                $('#cont-searchResult').append(html);
                $('#cont-searchResult').listview("refresh");
                $("#input-preSearchType").val("product");
                $('#input-pageSize').val(15);
                $('#input-posStart').val(15);
            }, 'json');
        },
        doCompanySearchHandler: function () {
            //清空上次搜索结果
            $('#cont-searchResult').html("");
            $.post(config.baseUrl + config.codeCompanyAppSearch, {
                searchKey: $('#input-search').val()
            }, function (json) {
                var html = "";
                for(var i = 0; i < json.data.length; i++){
                    var item = json.data[i];
                    html += '<li><a href="javascript:void(0)"><img src="img/ceprei.png"><h2>' + item.item + '</h2><p>' + item.itemEasy + '</p></a></li>';
                }
                $('#cont-searchResult').append(html);
                $('#cont-searchResult').listview("refresh");
                $("#input-preSearchType").val("company");
                $('#input-pageSize').val(15);
                $('#input-posStart').val(15);
            }, 'json');
        },
        doLoadMoreTouchHandler: function () {
            var searchType = $("#select-searchType").val();
            //检索类型为产品
            if(searchType == 1){
                this.doProductLoadMoreTouchHandler();
                //检索类型为公司
            }else if(searchType == 2){
                this.doCompanyLoadMoreTouchHandler();
            }
        },
        doProductLoadMoreTouchHandler: function () {
            $.post(config.baseUrl + config.mainInfoAppSearch, {
                posStart: $('#input-posStart').val(),
                searchKey: $('#input-search').val()
            }, function (json) {
                var html = "";
                for(var i = 0; i < json.data.length; i++){
                    var item = json.data[i];
                    html += '<li><a href="javascript:void(0)"><img src="img/ceprei.png"><h2>' + item.name + '</h2><p>' + item.companyName+ '</p></a></li>';
                }
                $('#cont-searchResult').append(html);
                $('#cont-searchResult').listview("refresh");
                $("#input-preSearchType").val("product");
                $('#input-pageSize').val(15);
                $('#input-posStart').val(parseInt($('#input-pageSize').val()) + parseInt($('#input-posStart').val()));
            }, 'json');
        },
        doCompanyLoadMoreTouchHandler: function () {
            $.post(config.baseUrl + config.codeCompanyAppSearch, {
                posStart: $('#input-posStart').val(),
                searchKey: $('#input-search').val()
            }, function (json) {
                var html = "";
                for(var i = 0; i < json.data.length; i++){
                    var item = json.data[i];
                    html += '<li><a href="javascript:void(0)"><img src="img/ceprei.png"><h2>' + item.item + '</h2><p>' + item.itemEasy + '</p></a></li>';
                }
                $('#cont-searchResult').append(html);
                $('#cont-searchResult').listview("refresh");
                $("#input-preSearchType").val("company");
                $('#input-pageSize').val(15);
                $('#input-posStart').val(parseInt($('#input-pageSize').val()) + parseInt($('#input-posStart').val()));
            }, 'json');
        }
    });
    return PrdOrCoSearch;
});
