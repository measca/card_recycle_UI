import {adminBankType, bankAccount} from "./tool/apiUrl";
import getAjax from "./tool/getAjax";
import confirm from "../tool/confirm/index";
import JSON from "../tool/JSON";

export function getAll(successCallback, errorCallback) {
    getAjax(bankAccount.queryUserCards, {
        id: getWebUId(),
        token: getWebUKey()
    }, function(datas) {
        successCallback(datas)
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function del(data, successCallback, errorCallback) {
    getAjax(bankAccount.del, {
        id: data.id,
        token: getWebUKey()
    }, function() {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
};

export function edit(data, successCallback, errorCallback) {
    getAjax(bankAccount.modify, {
        bankAcc: JSON.stringify({
            id: data.id,
            name: data.accountName,
            bankName: data.bankName,
            bankId: data.bankId,
            cardNum: data.account
        }),
        token: getWebUKey()
    }, function() {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function add(data, successCallback, errorCallback) {
    getAjax(bankAccount.add, {
        bankAcc: JSON.stringify({
            name: data.name,
            bankName: data.bankName,
            bankId: data.bankId,
            cardNum: data.account,
            userId: getWebUId()
        }),
        token: getWebUKey()
    }, function() {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function getBankListAtUser(successCallback, errorCallback) {
    getAjax(bankAccount.query, {
        token: getWebUKey()
    }, function(data) {
        successCallback(data)
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function getBankList(successCallback, errorCallback) {
    getAjax(adminBankType.queryAll, {
        token: getWebSpUKey()
    }, function(data) {
        successCallback(data)
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function addBankList(data, successCallback, errorCallback) {
    getAjax(adminBankType.add, {
        input: JSON.stringify({
            name: data.name
        }),
        token: getWebSpUKey()
    }, function() {
        successCallback()
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function editBankList(data, successCallback, errorCallback) {
    getAjax(adminBankType.modify, {
        input: JSON.stringify({
            id: data.id,
            name: data.name
        }),
        token: getWebSpUKey()
    }, function() {
        successCallback();
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function delBankList(data, successCallback, errorCallback) {
    getAjax(adminBankType.del, {
        id: data.id,
        token: getWebSpUKey()
    }, function() {
        successCallback("删除成功");
    }, function(msg){
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}