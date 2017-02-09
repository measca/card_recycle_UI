export function getInfo(successCallback, errorCallback) {
    successCallback({
        isStart: false,
        callbackUrl: 'http://cccc.ccc',
        id: "4589",
        secretKey: "dcddsc"
    });
}

export function editCallbackUrl(data, successCallback, errorCallback) {
    successCallback("修改成功");
}

export function startAPI(successCallback, errorCallback) {
    successCallback();
}

export function stopAPI(successCallback, errorCallback) {
    successCallback();
}

export function resetAPI(successCallback, errorCallback) {
    successCallback({
        id: "1111",
        secretKey: "222"
    });
}