import {user,security,wallet} from "./tool/apiUrl";
import getAjax from "./tool/getAjax";
import confirm from "../tool/confirm/index";
import JSON from "../tool/JSON";

export function getIndexInfo(successCallback, errorCallback) {
    successCallback({
        countMoney: 0.00,
        money: 0.00,
        tMoney: 0,
        loginTime: "2017-01-04 21:57:16",
        isSettingTrueNameVerified: false,
        isSettingTradingPassword: true,
        email: "mea***m@qq.com",
        phone: "158*****5862",
    });
    // getAjax(webInfoUrl.getInfo, function(data) {
    //     successCallback(data)
    // }, function(){
    //     confirm.show("请求服务器出错");
    //     if($.isFunction(errorCallback)) errorCallback();
    // })
}

export function signin(data, successCallback, errorCallback) {
    getAjax(user.login, {
        user: JSON.stringify({
            account: data.username,
            pwd: data.password,
            vCode: data.verifycode
        })
    }, function(res) {
        successCallback({
            username: data.username,
            token: res.token,
            uid: res.id,
            tel: res.tel,
            lastLoginTime: res.lastLoginTime
        })
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function signup(data, successCallback, errorCallback) {
    getAjax(user.register, {
        reg: JSON.stringify({
            account: data.eMail,
            pwd: data.passworld,
            qq: data.qq,
            tel: data.phone,
            smsCode: data.phoneCode
        })
    }, function(token) {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function forgetpassword(data, successCallback, errorCallback) {
    getAjax(user.forgetPwdInput, {
        forgetPwdInput: JSON.stringify(data)
    }, function() {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function verifyToken(data, successCallback, errorCallback) {
    successCallback();
}

export function editEmail(data, successCallback, errorCallback) {
    successCallback();
}

export function getEmail(successCallback, errorCallback) {
    successCallback({
        email: "measc**@.com"
    });
}

export function editPhone(data, successCallback, errorCallback) {
    getAjax(user.telChange, {
        changeTelInfo: JSON.stringify({
            userId: getWebUId(),
            newTel: data.newPhone,
            sms: data.code
        }),
        token: getWebUKey()
    }, function() {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function getPhone(successCallback, errorCallback) {
    successCallback({
        phone: "1580000000"
    });
}

export function editPassword(data, successCallback, errorCallback) {
    getAjax(user.changePwd, {
        user: JSON.stringify({
            oldPwd: data.oldPassword,
            newPwd: data.newPassword,
            account: getWebUserName(),
            smsCode: data.phoneCode
        }),
        token: getWebUKey()
    }, function() {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function editPayPassword(data, successCallback, errorCallback) {
    getAjax(security.changeWithDrawPwd, {
        uinfo: JSON.stringify({
            oldPwd: data.oldPayPassword,
            newPwd: data.newPayPassword,
            token: getWebUKey()
        }),
        token: getWebUKey()
    }, function() {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function isTrueNameVerified(successCallback, errorCallback) {
    successCallback();
}

export function getEmailAndPhone(successCallback, errorCallback) {
    successCallback({
        phone: "158000000000",
        email: "measca@qq.com"
    });
}

export function trueNameVerified(data, successCallback, errorCallback) {
    getAjax(security.realNameAuth, {
        uinfo: JSON.stringify({
            name: data.name,
            idNum: data.id,
            token: getWebUKey()
        }),
        token: getWebUKey()
    }, function() {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function getMoneyMax(successCallback, errorCallback) {
    getAjax(wallet.balance, {
        userId: getWebUId(),
        token: getWebUKey()
    }, function(data) {
        successCallback({
            money: data
        })
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function logout(token) {
    getAjax(user.logout, {
        token: token,
        exitinfo: JSON.stringify({
            token: token
        })
    });
}