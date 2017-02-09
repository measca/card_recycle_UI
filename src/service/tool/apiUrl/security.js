export default function(url) {
    return {
        realNameAuth: {
            url: url + "/security/realNameAuth",
            type: "POST"
        },
        changeWithDrawPwd: {
            url: url + "/security/changeWithDrawPwd",
            type: "POST"
        }
    };
}