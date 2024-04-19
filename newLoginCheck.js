try {
	let userObj = JSON.parse(localStorage.getItem("accounts-v2-userObj"));
	// alert(userObj);
	if ((userObj === null) && (location.pathname !== "/assets/error/not-logged-in.html")) {
		location.replace("/assets/error/not-logged-in.html");
		/* let sp = new URLSearchParams();
		sp.append("to", location.pathname);
		let newURL = new URL();
		newURL.href = "/assets/error/not-logged-in.html";
		newURL.search = sp;
		location.href = newURL; */
	} else {
		if (userObj.restrictedAccess === true) {
			let allowed = userObj.allowed;
			if (!(allowed.includes(location.pathname + location.search + location.hash))) {
				location.assign("/assets/error/no-access-right.html");
			}
		} else {
			let currentVer = "1.4.3.1";
			if (localStorage.getItem("accounts-v2-webVerAtTimeOfLogin") != currentVer) {
				location.replace("/login.html");
				location.hostname.split(".")[1] != "id" ? alert("There has been an update. Please login again.") : void(0);
			} else {
				if (document.body) {
					document.body.removeAttribute("style");
				}
			}
		}
	}
} catch(e) {
	location.replace("/login.html");
	alert("We ran into an internal error. Please login again.");
}
