export default function(url) {
    return {
        query: {
            url: url + "/admin/overview/query",
            type: "POST",
        }
    };
}