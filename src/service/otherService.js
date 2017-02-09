import {user} from "./tool/apiUrl";
import getAjax from "./tool/getAjax";
import confirm from "../tool/confirm/index";

export function sendPhoneCode(data) {
    getAjax(user.getSms, {
        phone: data.phone
    });
}