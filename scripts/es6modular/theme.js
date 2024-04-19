// ES6 Module
console.log("theme.js: JS module execution started");

function update() {
	let htmlel = document.body.parentElement;
	let theme = localStorage.getItem("theme");
	if (theme === "l") {
		htmlel.classList.add("newtheme");
	} else {
		htmlel.classList.remove("newtheme");
	}
}

update();
window.addEventListener("storage", update);
console.log("theme.js [ES6 Module]: event listener succesfully registered");