import {adminCard, card, sale, order} from "./tool/apiUrl";
import getAjax from "./tool/getAjax";

export function getAll(successCallback, errorCallback) {
    getAjax(card.query, {
        token: getWebUKey()
    }, function(datas) {
        successCallback(datas || []);
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function getItemAll(data, successCallback, errorCallback) {
    getAjax(card.queryItem, {
        cardId: data.id,
        token: getWebUKey()
    }, function(datas) {
        successCallback(datas || []);
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function getAllAtAdmin(successCallback, errorCallback) {
    getAjax(adminCard.queryAllAtAdmin, {
        token: getWebSpUKey()
    }, function(datas) {
        successCallback(datas || []);
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function recycle(data, successCallback, errorCallback) {
    var datas = [];
    for(var i = 0, d; d = data.list[i++];) {
        datas.push({
            cardNum: d.account,
            cardPwd: d.password,
            cardCode: data.cardCode,
            userId: getWebUId(),
            cardTypeId: data.cardId,
            cardItemId: data.moneyId
        });
    }
    getAjax(sale.sale, {
        saleInfo: JSON.stringify(datas),
        token: getWebUKey()
    }, function() {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function orderList(data, successCallback, errorCallback) {
    var queryData = {
        index: data.pageIndex,
        count: data.pageNum,
        userId: getWebUId()
    };
    if(data.startTime) queryData.from = data.startTime;
    if(data.endTime) queryData.to = data.endTime;
    if(data.state) queryData.orderStatus = data.state;
    getAjax(order.queryList, {
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

export function del(data, successCallback, errorCallback) {
    getAjax(adminCard.del, {
        id: data.id,
        token: getWebSpUKey()
    }, function(datas, count) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function add(data, successCallback, errorCallback) {
    getAjax(adminCard.add, {
        input: JSON.stringify({
            name: data.name,
            cardCode: data.state,
            saleRatio: data.bl
        }),
        token: getWebSpUKey()
    }, function(datas, count) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function edit(data, successCallback, errorCallback) {
    getAjax(adminCard.modify, {
        input: JSON.stringify({
            id: data.id,
            name: data.name,
            cardCode: data.state,
            saleRatio: data.bl
        }),
        token: getWebSpUKey()
    }, function(datas, count) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function addMoneyItem(data, successCallback, errorCallback) {
    getAjax(adminCard.addCardItem, {
        input: JSON.stringify({
            cardTypeId: data.id,
            supportAmount: data.money
        }),
        token: getWebSpUKey()
    }, function(datas, count) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function editMoneyItem(data, successCallback, errorCallback) {
    getAjax(adminCard.modifyCardItem, {
        input: JSON.stringify({
            id: data.id,
            supportAmount: data.money
        }),
        token: getWebSpUKey()
    }, function(datas, count) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function delMoneyItem(data, successCallback, errorCallback) {
    getAjax(adminCard.delCardItem, {
        id: data.id,
        token: getWebSpUKey()
    }, function(datas, count) {
        successCallback();
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function getMoneyItemAll(data, successCallback, errorCallback) {
    getAjax(adminCard.queryCardItem, {
        cardTypeId: data.id,
        token: getWebSpUKey()
    }, function(datas) {
        successCallback(datas);
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}

export function orderListAtAdmin(data, successCallback, errorCallback) {
    var queryData = {
        index: data.pageIndex,
        count: data.pageNum
    };
    if(data.startTime) queryData.from = data.startTime;
    if(data.endTime) queryData.to = data.endTime;
    if(data.state) queryData.orderStatus = data.state;
    if(data.cardAccount) queryData.cardNum = data.cardAccount;
    if(data.orderVal) queryData.orderNum = data.orderVal;
    getAjax(order.adminOrderQuery, {
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

export function typeAndItemsQuery(successCallback, errorCallback) {
    getAjax(card.typeAndItemsQuery, {}, function(datas, count) {
        if(datas && Object.prototype.toString.apply(datas) != '[object Array]') {
            datas = [datas];
        }
        successCallback((datas || []));
    }, function(msg) {
        if($.isFunction(errorCallback)) errorCallback(msg);
    });
}