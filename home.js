let userObj = JSON.parse(localStorage.getItem("accounts-v2-userObj"));
const isGuest = !!userObj.guest;
{
	let username = userObj.name;
	let welcometext = document.querySelector("#welcome");
	
	welcometext.textContent = username;

	if (!isGuest) {
		let pageheader = document.querySelector("#page-header");
		let GEPclass = userObj.GEPclass.name + " 2024"
		
		pageheader.innerText = document.title = GEPclass;
	}
}

{
	//widgets
	document.querySelectorAll(".widget").forEach(elem => {
		elem.addEventListener("click", function() {
			window.open(elem.dataset.to);
		});
	});
}

{
	document.getElementById("iconlink").href = `/logos/logo.png`;
}
	
{	
	document.getElementById("toggletheme").addEventListener("click", function(ev) {
		let btn = ev.target;
		let htmlel = document.body.parentNode;
		htmlel.classList.toggle("newtheme")
		btn.innerText = htmlel.classList.contains("newtheme") ? "Dark theme" : "Light theme"
		localStorage.setItem("theme", htmlel.classList.contains("newtheme") ? "l" : "d")
	})
}

{
	let theme = localStorage.getItem("theme"); // will be "l" or "d"
	if (theme == "l") {
		document.getElementById("toggletheme").click();
	}
}

{
	//For activating tools.
	for (tool of Array.from(document.querySelectorAll("div.tool"))) {
		tool.setAttribute("tabindex", "0");
		tool.addEventListener("click", function(ev) {
			window.open(ev.currentTarget.dataset.link);
		})
		let span = document.createElement("span");
		let text = document.createTextNode(tool.dataset.name);
		span.appendChild(text);
		span.classList.add("description");
		tool.appendChild(span);
	}
}
