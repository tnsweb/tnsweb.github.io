// ES6 Module
import * as userInfo from "./userInfo.js";

console.log("home.js: JS module execution started");

{
	let welcometext = document.querySelector("#welcome");
	welcometext.textContent = userInfo.userName;
	
	let pageheader = document.querySelector("#page-header");
	pageheader.textContent = document.title = userInfo.userGEPClass
}

//continue here!