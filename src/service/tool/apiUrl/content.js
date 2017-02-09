export default function(url) {
    return {
        query: {
            url: url + "/content/query",
            type: "POST"
        },
        modify: {
            url: url + "/admin/content/modify",
            type: "POST"
        }
    }
}