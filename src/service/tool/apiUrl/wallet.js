export default function(url) {
    return {
        balance: {
            url: url + "/wallet/balance",
            type: "POST"
        }
    };
}