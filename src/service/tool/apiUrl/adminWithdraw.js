export default function(url) {
    return {
        query: {
            url: url + "/admin/withdraw/query",
            type: "POST"
        },
        deal: {
            url: url + "/admin/withdraw/deal",
            type: "POST"
        }
    };
}