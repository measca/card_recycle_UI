import {adminOverview} from "./tool/apiUrl";
import getAjax from "./tool/getAjax";
import JSON from "../tool/JSON";

export function query(successCallback, errorCallback) {
    getAjax(adminOverview.query, {
        token: getWebSpUKey()
    }, function(data) {
        successCallback(data)
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}