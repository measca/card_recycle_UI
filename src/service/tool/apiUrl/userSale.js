export default function(url) {
    return {
        sale: {
            url: url + "/sale/sale",
            type: "POST"
        },
        queryCardType: {
            url: url + "/sale/cardType/query",
            type: "POST"
        },
        queryCardTypeItem: {
            url: url + "/sale/cardTypeItem/query",
            type: "POST"
        }
    };
}