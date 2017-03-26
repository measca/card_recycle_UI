
import "../lib/font-awesome/css/font-awesome.css";

import {install as fileSize} from "../regular/filter/fileSize";
import {install as alert} from "../regular/directive/alert";
import {install as tooltip} from "../regular/directive/tooltip";
import {install as validation} from "../regular/validate/validation";
import {install as trim} from "../regular/parser/trim";
Regular.use(fileSize);
Regular.use(alert);
Regular.use(tooltip);
Regular.use(validation);
Regular.use(trim);

import cookie from "../tool/cookie.js";

import {logout} from "../service/userService";
import {loginOut} from "../service/adminUserService";

window.isLogin = ()=>{
     return !!cookie.get("userName") && !!cookie.get("uKey") && !!cookie.get("uId");
}
window.getWebUserName = ()=>{
    return cookie.get("userName");
}
window.setWebUserName = (name)=>{
    cookie.set("userName", name);
}
window.getWebUKey = ()=>{
    return cookie.get("uKey");
}
window.setWebUKey = (val)=>{
    cookie.set("uKey", val);
}
window.getWebUId = ()=>{
    return cookie.get("uId");
}
window.setWebUId = (val)=>{
    cookie.set("uId", val);
}
window.getWebTel = ()=>{
    return cookie.get("uTel");
}
window.setWebTel = (val)=>{
    cookie.set("uTel", val);
}
window.getWebLastLoginTime = ()=>{
    return cookie.get("uLastLoginTime");
}
window.setWebLastLoginTime = (val)=>{
    cookie.set("uLastLoginTime", val);
}
window.getWebName = ()=>{
    return cookie.get("uName");
}
window.setWebName = (val)=>{
    cookie.set("uName", val);
}
window.removeUserNameAndUKey = ()=>{
    logout(getWebUKey());
    cookie.remove("userName");
    cookie.remove("uKey");
    cookie.remove("uId");
    cookie.remove("uTel");
    cookie.remove("uLastLoginTime");
}

window.isSpLogin = ()=>{
     return !!cookie.get("spUserName") && !!cookie.get("spUKey");
}
window.getWebSpUserName = ()=>{
    return cookie.get("spUserName");
}
window.setWebSpUserName = (name)=>{
    cookie.set("spUserName", name);
}
window.getWebSpUKey = ()=>{
    return cookie.get("spUKey");
}
window.setWebSpUKey = (val)=>{
    cookie.set("spUKey", val);
}
window.removeSpUserNameAndSpUKey = ()=>{
    loginOut(getWebSpUKey());
    cookie.remove("spUserName");
    cookie.remove("spUKey");
}

var browser=navigator.appName 
var b_version=navigator.appVersion 
var version=b_version.split(";"); 
var trim_Version=version[1].replace(/[ ]/g,""); 
if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") 
{ 
} 
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") 
{ 
} else {
    $("#browser_ie").remove();
}