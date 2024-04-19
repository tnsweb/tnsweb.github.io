let userObj = JSON.parse(localStorage.getItem("accounts-v2-userObj"));
{
	let tabs = document.getElementsByTagName("si-tab")
	for (let tab of tabs) {
		tab.addEventListener("click", function(ev) {
			ev = ev ?? window.event;
			let clickedtab = ev.target;
			for (let tab2 of tabs) {
				tab2.classList.remove("active")
				document.getElementById(tab2.dataset.activates).classList.remove("active")
			}
			clickedtab.classList.add("active")
			document.getElementById(clickedtab.dataset.activates).classList.add("active")
		})
	}
	document.getElementById("si-tab-holder").children[0].click()
}

{
	let overrideStyle = "";
	//check userObj for tnst:"auth"
	if (userObj.tnst === "auth") {
		//if true, allow access to
		//data-restricted="auth" tabs
		overrideStyle = `
	#si-tab-holder > si-tab[data-restricted] {
 display: auto !important;
 }`;
	} else if (userObj.tnst === "team") {
		overrideStyle = `
	#si-tab-holder > si-tab[data-restricted="team"] {
 display: auto;
 }`;
	};
	document.head.insertAdjacentHTML("beforeend", `<style>${overrideStyle}</style>`);
}

{
	let fillerFooter = document.querySelector("#main-footer").cloneNode(true);
	fillerFooter.id="filler-footer";
	document.body.append(fillerFooter);
}