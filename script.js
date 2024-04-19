if (location.pathname == "/") {
	links = document.getElementsByTagName("a")
	for (let i of links) {
		i.target = "_blank";
	}
}