export default function(url) {
    return {
        query: {
            url: url + "/card/query",
            type: "POST"
        },
        queryItem: {
            url: url + "/card/item/query",
            type: "POST"
        },
        typeAndItemsQuery: {
            url: url + "/card/typeAndItems/query",
            type: "POST"
        }
    }
}