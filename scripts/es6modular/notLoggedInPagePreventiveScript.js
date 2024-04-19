// ES6 Module
import * as userInfo from "./userInfo.js";
console.log("notLoggedInPagePreventiveScript.js: JS module execution started");

let info = Object.values(userInfo).filter(x => !([null, undefined].includes(x)));
if (info.length !== 0) {
	location.replace("/");
}