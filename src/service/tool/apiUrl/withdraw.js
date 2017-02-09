export default function(url) {
    return {
        query: {
            url: url + "/withdraw/query",
            type: "POST"
        },
        addBankAccount: {
            url: url + "/withdraw/bankAccount/add",
            type: "POST"
        },
        withdraw: {
            url: url + "/withdraw/applyWithdraw",
            type: "POST"
        },
        modifyBankAccont: {
            url: url + "/withdraw/bankAccount/modify",
            type: "POST"
        },
        delBankAccont: {
            url: url + "/withdraw/bankAccount/del",
            type: "POST"
        }
    };
}