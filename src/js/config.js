/**
 * Created by Qiyue-Lin on 2016/5/8.
 */

define(function(){
    var config = new function () {
        this.baseUrl = "http://192.168.18.2:8080/ecpim/";

        /**
         * 
         * @type {string}
         */
        this.baseGetFileUrl = this.baseUrl + "upload/";
        /**
         *
         * @type {string}
         */
        this.codeCompanyAppSearch = 'android/json/codeCompanyApp_search.shtml';
        /**
         * 产品详细信息请求连接
         * @type {string}
         */
        this.codeCompanyAppFind = 'android/json/codeCompanyApp_find.shtml';
        /**
         *
         * @type {string}
         */
        this.mainInfoAppSearch = 'android/json/mainInfoApp_search.shtml';

    }
    return config;
});
