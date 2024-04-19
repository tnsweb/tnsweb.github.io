var users = ["empty", "yunxi743", "jiaen057", "junying577", "aidan770", "jan828", "mingze938", "xinrun125", "amanda090", "stefanie550", "joyce666", "sarah725", "muen486", "ruilun066", "kayle360", "alex701", "aoqi996", "xinye267", "jingxuan834", "janette438", "nicole329", "xander958", "hoeteng510", "kevin350", "yinhyang414", "zhiyan196", "yiqun270", "andre509", "keegan760", "faith223", "4-1alpha", "4-1beta", "mrs_chia"]; //poss inputs (password), 1st is placeholder
var possnames = ["empty", "Yun Xi", "Jia En", "Jun Ying", "Aidan", "Jan", "Mingze", "Xinrun", "Amanda", "Stefanie", "Joyce", "Sarah", "Muen", "Ruilun", "Kayle", "Alex", "Aoqi", "Xinye", "Jingxuan", "Janette", "Nicole", "Xander", "Hoe Teng", "Kevin", "Yin Hyang", "Zhiyan", "Yi Qun", "Andre", "Keegan", "Faith", "Alpha Tester", "Beta Tester", "Mrs Chia"]; //correspond to users list // last one used to be for "blank" login, now returns "Mrs Chia"
function login_system() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var usernameText = username.value;
	var unhashedpasswordText = password.value;
	var passwordText = unhashedpasswordText;
	if ((usernameText=="4-1websitetester")&&((users.indexOf(passwordText)==31)||(users.indexOf(passwordText)==30))) { // if password is alpha or beta
		return [possnames[users.indexOf(passwordText)], users.indexOf(passwordText)]
	} else if (usernameText == "4-1web") {
		userID = users.indexOf(passwordText);
		if (parseInt(userID)!=userID) {
			alert("Access denied! Incorrect password!");
			return ["error", "error"];
		} else if (userID<1 || userID>29) {
			if (userID == 32) {
				return [possnames[userID], userID];
			} else {
				alert("Access denied! Incorrect password!");
			return ["error", "error"];
			}
		} else {
			return [possnames[userID], userID];
		};	
	} else {
		alert("Access denied! Incorrect username!");
		return ["error", "error"];
	};
};

function login() {
	var returnvalue = login_system();
	if (possnames.includes(returnvalue[0])) {
		try {
			sessionStorage.setItem("user", returnvalue[0]);
			location.replace("/");
		}
		catch(e) {
			alert("Oops! We ran into an internal error. Please reload the page and try again.");			}
	};
};

if (sessionStorage.getItem("user") != null) {
	location.assign("/");
};
	