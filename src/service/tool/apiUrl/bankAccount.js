export default function(url) {
    return {
        query: {
            url: url + "/bankAccount/bank/query",
            type: "POST"
        },
        add: {
            url: url + "/bankAccount/add",
            type: "POST"
        },
        queryUserCards: {
            url: url + "/bankAccount/queryBankAccount/id",
            type: "POST"
        },
        del: {
            url: url + "/bankAccount/del",
            type: "POST"
        },
        modify: {
            url: url + "/bankAccount/modify",
            type: "POST"
        }
    };
}