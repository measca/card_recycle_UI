import {adminBusiness} from "./tool/apiUrl";
import getAjax from "./tool/getAjax";
import confirm from "../tool/confirm/index";
import JSON from "../tool/JSON";

export function query(data, successCallback, errorCallback) {
    getAjax(adminBusiness.query, {
        condition: JSON.stringify({
            account: data.account,
            index: data.pageIndex,
            count: data.pageNum
        }),
        token: getWebSpUKey()
    }, function(datas, count) {
        if(datas && Object.prototype.toString.apply(datas) != '[object Array]') {
            datas = [datas];
        }
        successCallback({
            list: datas || [],
            dataCount: count
        })
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}