export default function(url) {
    return {
        query: {
            url: url + "/admin/bank/query",
            type: "POST",
            toSendModel() {
                return {};
            },
            toBackModel() {
                return{};
            }
        },
        modify: {
            url: url + "/admin/bank/modify",
            type: "POST"
        },
        del: {
            url: url + "/admin/bank/del",
            type: "POST"
        },
        add: {
            url: url + "/admin/bank/add",
            type: "POST"
        }
    };
}