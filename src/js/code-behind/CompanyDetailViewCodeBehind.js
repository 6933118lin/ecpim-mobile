/**
 * Created by ceprei2598 on 2016/5/9.
 */

define(['text!../html/CompanyDetailView.html', 'config', 'jquery', 'jquerymobile'], function (CompanyDetailView, config, $) {
    var CompanyDetailViewCodeBehind = function (code) {
        var self = this;
        $(function () {
            $("#page-companydetail").html(CompanyDetailView);
            $.post(config.baseUrl + config.codeCompanyAppFind, {companyCode: code})
                .done(function (json, textStatus, jqXHR) {
                    var baseId = 'table-company-detail-';
                    $('#' + baseId + "item").html(json.obj.item);
                    $('#' + baseId + "itemEasy").html(json.obj.itemEasy);
                    $('#' + baseId + "item2").html(json.obj.item2);
                    $('#' + baseId + "code").html(json.obj.code);
                    $('#' + baseId + "codeCompanyNature").html(json.obj.codeCompanyNature);
                    $('#' + baseId + "province").html(json.obj.province);
                    $('#' + baseId + "city").html(json.obj.city);
                    $('#' + baseId + "location").html(json.obj.location);
                    $('#' + baseId + "zipCode").html(json.obj.zipCode);
                    $('#' + baseId + "netAddress").html(json.obj.netAddress);
                    $('#' + baseId + "OperationDesc").html(json.obj.operationDesc);
                    if(typeof json.obj.pathCompanyphotos !== "undefined"){
                        $('#' + baseId + "pathCompanyphotos").attr('src', encodeURI(config.baseGetFileUrl + json.obj.pathCompanyphotos));
                    }
                });
            $.mobile.changePage("#page-companydetail");
        });
    };
    return CompanyDetailViewCodeBehind;
});
