export default function(url) {
    return {
        login: {
            url: url + "/admin/user/login",
            type: "POST"
        },
        logout: {
            url: url + "/admin/user/logout",
            type: "POST"
        },
        query: {
            url: url + "/admin/user/query",
            type: "POST"
        },
        modify: {
            url: url + "/admin/user/modify",
            type: "POST"
        },
        del: {
            url: url + "/admin/user/del",
            type: "POST"
        },
        add: {
            url: url + "/admin/user/add",
            type: "POST"
        },
        changePwd: {
            url: url + "/admin/user/changePwd",
            type: "POST"
        }
    };
}