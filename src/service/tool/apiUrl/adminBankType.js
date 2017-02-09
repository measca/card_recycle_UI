export default function(url) {
    return {
        queryAll: {
            url: url + "/admin/bankType/queryAll",
            type: "POST"
        },
        modify: {
            url: url + "/admin/bankType/modify",
            type: "POST"
        },
        del: {
            url: url + "/admin/bankType/del",
            type: "POST"
        },
        add: {
            url: url + "/admin/bankType/add",
            type: "POST"
        }
    };
}