let userObj = JSON.parse(localStorage.getItem("accounts-v2-userObj"));
if (userObj.AMEC !== true) {
	location.replace("/assets/error/no-access-right.html");
}