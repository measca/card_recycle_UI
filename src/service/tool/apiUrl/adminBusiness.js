export default function(url) {
    return {
        query: {
            url: url + "/admin/business/query",
            type: "POST"
        },
        querySaleInfo: {
            url: url + "/admin/bank/modify",
            type: "POST"
        }
    };
}