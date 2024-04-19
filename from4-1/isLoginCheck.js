try {
	let var1 = sessionStorage.getItem("user");
	if (var1 == null) {
		sessionStorage.setItem("next", window.location.href);
		document.getElementsByTagName("html")[0].setAttribute("style", "display: none;");
		location.replace("/login.html");
		//alert("Please login again.")
	}
}
catch(err) {
	location.replace("/login-files/login.html");
	alert("An error occured. Please login again.");
}