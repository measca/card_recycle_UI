import getAjax from "../../tool/ajax";
import gritter from "../../tool/gritter/gritter";
import md5 from "../../tool/md5";
import cookie from "../../tool/cookie.js";
import JSON from "../../tool/JSON";

export default function(url, data, successCallback, errorCallback, callback) {
    if($.isFunction(data)) {
        errorCallback = successCallback;
        successCallback = data;
        data = null;
    }
    if($.isFunction(url.toSendModel)) {
        data = url.toSendModel(data);
    }
    getAjax().create(url, data, "text").success(function(dataVal){
        var data = JSON.parse(dataVal);
        if(data.code == 200) {
            if($.isFunction(url.toBackModel)) {
                data.data = url.toBackModel(data.data);
            }
            if($.isFunction(successCallback)) successCallback(data.data, data.count);
        } else if(data.code == 604) {
            cookie.remove("userName");
            cookie.remove("uKey");
            cookie.remove("uId");
            gritter("登录超时").warning();
            location.href = "#/signin";
        } else if(data.code == 606) {
            cookie.remove("spUserName");
            cookie.remove("spUKey");
            gritter("登录超时").warning();
            location.href = "#/superviseLogin";
        } else if($.isFunction(errorCallback)){
            errorCallback(data.msg ? data.msg : "非法操作", data.code);
        }
    }).error(function() {
        if($.isFunction(errorCallback)) {
            errorCallback("服务器出现未知错误，请稍候操作", -999);
        }
    }).send();
}

export function EncryptionUser(data) {
    var keys = [];
}