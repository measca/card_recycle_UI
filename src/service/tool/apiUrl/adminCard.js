export default function(url) {
    return {
        query: {
            url: url + "/admin/card/query",
            type: "POST"
        },
        queryAllAtAdmin: {
            url: url + "/admin/card/query",
            type: "POST"
        },
        add: {
            url: url + "/admin/card/add",
            type: "POST"
        },
        modify: {
            url: url + "/admin/card/modify",
            type: "POST"
        },
        del: {
            url: url + "/admin/card/del",
            type: "POST"
        },
        addCardItem: {
            url: url + "/admin/card/cardItem/add",
            type: "POST"
        },
        modifyCardItem: {
            url: url + "/admin/card/cardItem/modify",
            type: "POST"
        },
        delCardItem: {
            url: url + "/admin/card/cardItem/del",
            type: "POST"
        },
        queryCardItem: {
            url: url + "/admin/card/cardItem/query",
            type: "POST"
        }
    }
}