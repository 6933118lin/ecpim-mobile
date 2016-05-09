/**
 * Created by ceprei2598 on 2016/5/9.
 */

define(['text!../html/PrdOrCoSearchView.html','config', 'CompanyDetailViewCodeBehind', 'jquery', 'jquerymobile'],
    function (PrdOrCoSearch, config, CompanyDetailViewCodeBehind, $) {
    var PrdOrCoSearchCodeBehind = function () {
        var self = this;
        this.doSearchRouterHandler = function () {
            var searchType = $("#select-searchType").val();
            //检索类型为产品
            if(searchType == 1){
                self.doProductSearchHandler();
                //检索类型为公司
            }else if(searchType == 2){
                self.doCompanySearchHandler();
            }
        };
        this.doProductSearchHandler = function () {
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
        };
        this.doCompanySearchHandler = function () {
            //清空上次搜索结果
            $('#cont-searchResult').html("");
            $.post(config.baseUrl + config.codeCompanyAppSearch, {
                searchKey: $('#input-search').val()
            }, function (json) {
                var html = "";
                for(var i = 0; i < json.data.length; i++){
                    var item = json.data[i];
                    html += '<li><a href="javascript:window.ecpimMobilePrdOrCoSearchModule.doRenderCompanyDetailView(\'' + item.code + '\')"><img src="img/ceprei.png"><h2>' + item.item + '</h2><p>' + item.itemEasy + '</p></a></li>';
                }
                $('#cont-searchResult').append(html);
                $('#cont-searchResult').listview("refresh");
                $("#input-preSearchType").val("company");
                $('#input-pageSize').val(15);
                $('#input-posStart').val(15);
            }, 'json');
        };
        this.doLoadMoreTouchHandler = function () {
            var searchType = $("#select-searchType").val();
            //检索类型为产品
            if(searchType == 1){
                self.doProductLoadMoreTouchHandler();
                //检索类型为公司
            }else if(searchType == 2){
                self.doCompanyLoadMoreTouchHandler();
            }
        };
        this.doProductLoadMoreTouchHandler = function () {
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
        };
        this.doCompanyLoadMoreTouchHandler = function () {
            $.post(config.baseUrl + config.codeCompanyAppSearch, {
                posStart: $('#input-posStart').val(),
                searchKey: $('#input-search').val()
            }, function (json) {
                var html = "";
                for(var i = 0; i < json.data.length; i++){
                    var item = json.data[i];
                    html += '<li><a href="javascript:window.ecpimMobilePrdOrCoSearchModule.doRenderCompanyDetailView(\'' + item.code + '\')"><img src="img/ceprei.png"><h2>' + item.item + '</h2><p>' + item.itemEasy + '</p></a></li>';
                }
                $('#cont-searchResult').append(html);
                $('#cont-searchResult').listview("refresh");
                $("#input-preSearchType").val("company");
                $('#input-pageSize').val(15);
                $('#input-posStart').val(parseInt($('#input-pageSize').val()) + parseInt($('#input-posStart').val()));
            }, 'json');
        };
        this.doRenderCompanyDetailView = function (code) {
            new CompanyDetailViewCodeBehind(code);
        };
        $(function () {
            $('#page-prdorcosearch').html(PrdOrCoSearch);
            $.mobile.changePage('#page-prdorcosearch');
            $('#btn-search').on('click', self.doSearchRouterHandler);
            $('#btn-loadMore').on('click', self.doLoadMoreTouchHandler);
            window.ecpimMobilePrdOrCoSearchModule = self;
        });
    };
    return PrdOrCoSearchCodeBehind;
});
