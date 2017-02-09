import {adminUser} from "./tool/apiUrl";
import getAjax from "./tool/getAjax";
import confirm from "../tool/confirm/index";
import JSON from "../tool/JSON";


export function verifyToken(data, successCallback, errorCallback) {
    successCallback();
}

export function login(data, successCallback, errorCallback) {
    getAjax(adminUser.login, {
        input: JSON.stringify({
            account: data.username,
            pwd: data.password
        })
    }, function(token) {
        successCallback({
            username: data.username,
            token: token
        })
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function loginOut(token) {
    getAjax(adminUser.logout, {token: token});
}

export function editPwd(data, successCallback, errorCallback) {
    getAjax(adminUser.changePwd, {
        input: JSON.stringify({
            oldPwd: data.oldPassword,
            newPwd: data.newPassword,
            token: getWebSpUKey()
        }),
        token: getWebSpUKey()
    }, function(token) {
        successCallback({
            username: data.username,
            token: token
        })
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function addUser(data, successCallback, errorCallback) {
    getAjax(adminUser.add, {
        input: JSON.stringify({
            account: data.userName,
            pwd: data.password
        }),
        token: getWebSpUKey()
    }, function(token) {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function delUser(data, successCallback, errorCallback) {
    getAjax(adminUser.del, {
        id: data.id,
        token: getWebSpUKey()
    }, function(token) {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function resetUserPwd(data, successCallback, errorCallback) {
    getAjax(adminUser.del, {
        input: JSON.stringify({
            account: data.userName,
            pwd: data.password
        }),
        token: getWebSpUKey()
    }, function(token) {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function getUserList(successCallback, errorCallback) {
    getAjax(adminUser.query, {
        token: getWebSpUKey()
    }, function(datas) {
        successCallback(datas)
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}