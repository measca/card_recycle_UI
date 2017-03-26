export default function(url) {
    return {
        register: {
            url: url + "/user/register",
            type: "POST"
        },
        getSms: {
            url: url + "/user/getSms",
            type: "POST"
        },
        login: {
            url: url + "/user/login",
            type: "POST"
        },
        changePwd: {
            url: url + "/user/change",
            type: "POST"
        },
        logout: {
            url: url + "/user/logout",
            type: "POST"
        },
        forgetPwdInput: {
            url: url + "/user/forgetPwd",
            type: "POST"
        },
        telChange: {
            url: url + "/user/tel/change",
            type: "POST"
        },
        lock: {
            url: url + "/user/admin/lock",
            type: "POST"
        },
        enable: {
            url: url + "/user/admin/enable",
            type: "POST"
        },
        isTelExists: {
            url: url + "/user/isTelExists",
            type: "POST"
        },
        isAccExists: {
            url: url + "/user/isAccExists",
            type: "POST"
        }
    };
}