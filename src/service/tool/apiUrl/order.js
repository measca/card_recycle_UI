export default function(url) {
    return {
        query: {
            url: url + "/order/query",
            type: "POST"
        },
        queryDetails: {
            url: url + "/order/queryDetails",
            type: "POST"
        },
        queryList: {
            url: url + "/order/queryList",
            type: "POST"
        },
        adminOrderQuery: {
            url: url + "/admin/order/query",
            type: "POST"
        }
    };
}