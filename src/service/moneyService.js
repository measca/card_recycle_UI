import {withdraw as withdrawURL, adminWithdraw} from "./tool/apiUrl";
import getAjax from "./tool/getAjax";
import confirm from "../tool/confirm/index";
import JSON from "../tool/JSON";

export function drawingList(data, successCallback, errorCallback) {
    var queryData = {
        index: data.pageIndex,
        count: data.pageNum,
        userId: getWebUId()
    };
    if(data.startTime) queryData.from = data.startTime;
    if(data.endTime) queryData.to = data.endTime;
    if(data.state) queryData.processStatus = data.state;
    getAjax(withdrawURL.query, {
        condition: JSON.stringify(queryData),
        token: getWebUKey()
    }, function(datas, count) {
        if(datas && Object.prototype.toString.apply(datas) != '[object Array]') {
            datas = [datas];
        }
        successCallback({
            dataCount: count,
            list: datas || []
        });
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function withdraw(data, successCallback, errorCallback) {
    getAjax(withdrawURL.withdraw, {
        info: JSON.stringify({
            withdrawAmount: data.withdrawAmount,
            withdrawPwd: data.withdrawPwd,
            bankName: data.bankName,
            userId: getWebUId(),
            bankId: data.bankId,
            cardNum: data.cardNum
        }),
        token: getWebUKey()
    }, function(money) {
        successCallback(money);
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function drawingListAtAdmin(data, successCallback, errorCallback) {
    var queryData = {
        index: data.pageIndex,
        count: data.pageNum
    };
    if(data.account) queryData.account = data.account;
    if(data.state) queryData.status = data.state;
    getAjax(adminWithdraw.query, {
        condition: JSON.stringify(queryData),
        token: getWebSpUKey()
    }, function(datas, count) {
        if(datas && Object.prototype.toString.apply(datas) != '[object Array]') {
            datas = [datas];
        }
        successCallback({
            dataCount: count,
            list: datas || []
        });
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function processDrawing(data, successCallback, errorCallback) {
    getAjax(adminWithdraw.deal, {
        input: JSON.stringify(data),
        token: getWebSpUKey()
    }, function(datas, count) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}