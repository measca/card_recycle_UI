export default function(url) {
    return {
        query: {
            url: url + "/admin/order/query",
            type: "POST"
        },
        dealWithOrder: {
            url: url + "/admin/order/dealWithOrder",
            type: "POST"
        }
    };
}