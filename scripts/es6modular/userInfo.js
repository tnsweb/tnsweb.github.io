// ES6 Module
console.log("userInfo.js: JS module execution started");

const empty = {};
let userObj = (JSON.parse(localStorage.getItem("accounts-v2-userObj")) ?? empty);

let userName = userObj.name ?? null;
let userLoginName = userObj.username ?? null;
let userMFClass = userObj.mixedFC.name ?? null;
let userGEPClass = userObj.GEPclass.name ?? null;
let userAttendsAMEC = (userObj === empty) ? null : (userObj.AMEC ?? false);
let userHasLinkedReplitAccount = (userObj === empty) ? null : ((
		(typeof userObj.replit === "string")
		&&
		(userObj.replit !== "")
	) ? true : false);
let userReplitAccountName = (userObj === empty) ? null : (userHasLinkedReplitAccount ? userObj.replit : null);

export {
	userName, 
	userLoginName, 
	userMFClass, 
	userGEPClass, 
	userAttendsAMEC, 
	userHasLinkedReplitAccount, 
	userReplitAccountName
};