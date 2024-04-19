// ES6 Module
import {userGEPClass} from "./userInfo.js";

console.log("setTitleAndLogo.js: JS Module Execution Started");

function update(titleName, iconLink) {
	let titleString = `${titleName} - ${userGEPclass} 2023`;
	document.title = titleString;
	iconLink.href = `/logos/${userObj.GEPclass.name||userObj.mixedFC.name}`;
}

export {update};