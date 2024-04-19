// ES6 Module
console.log("superInterviewsWebsite.js: JS module execution started");

let tabs = document.querySelectorAll("si-tab");
for (let currTab of tabs) {
	currTab.addEventListener("click", function(ev) {
		ev = ev ?? window.event;
		let clickedTab = ev.target;
		for (let cycleTab of tabs) {
			cycleTab.classList.remove("active");
			document.querySelector(`#${cycleTab.dataset.activates}`).classList.remove("active");
		}
		clickedTab.classList.add("active");
			document.querySelector(`#${clickedTab.dataset.activates}`).classList.add("active");
	})
}
document.querySelector("#si-tab-holder").children[0].click();