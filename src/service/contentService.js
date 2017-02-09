import {content} from "./tool/apiUrl";
import getAjax from "./tool/getAjax";

export function aboutQuery(successCallback, errorCallback) {
    getAjax(content.query, {
        type: 'about'
    }, function(data) {
        successCallback(data);
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function aboutModify(data, successCallback, errorCallback) {
    getAjax(content.modify, {
        type: 'about',
        data: data.context,
        token: getWebSpUKey()
    }, function(datas) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function contactQuery(successCallback, errorCallback) {
    getAjax(content.query, {
        type: 'contact'
    }, function(data) {
        successCallback(data);
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function contactModify(data, successCallback, errorCallback) {
    getAjax(content.modify, {
        type: 'contact',
        data: data.context,
        token: getWebSpUKey()
    }, function(datas) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function serviceQuery(successCallback, errorCallback) {
    getAjax(content.query, {
        type: 'service'
    }, function(data) {
        successCallback(data);
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function serviceModify(data, successCallback, errorCallback) {
    getAjax(content.modify, {
        type: 'service',
        data: data.context,
        token: getWebSpUKey()
    }, function(datas) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function cooperateQuery(successCallback, errorCallback) {
    getAjax(content.query, {
        type: 'cooperate'
    }, function(data) {
        successCallback(data);
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function cooperateModify(data, successCallback, errorCallback) {
    getAjax(content.modify, {
        type: 'cooperate',
        data: data.context,
        token: getWebSpUKey()
    }, function(datas) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function declareQuery(successCallback, errorCallback) {
    getAjax(content.query, {
        type: 'declare'
    }, function(data) {
        successCallback(data);
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function declareModify(data, successCallback, errorCallback) {
    getAjax(content.modify, {
        type: 'declare',
        data: data.context,
        token: getWebSpUKey()
    }, function(datas) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function problemsQuery(successCallback, errorCallback) {
    getAjax(content.query, {
        type: 'problems'
    }, function(data) {
        successCallback(data);
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function problemsModify(data, successCallback, errorCallback) {
    getAjax(content.modify, {
        type: 'problems',
        data: data.context,
        token: getWebSpUKey()
    }, function(datas) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}