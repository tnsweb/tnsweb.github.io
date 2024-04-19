let userObj = JSON.parse(localStorage.getItem("accounts-v2-userObj"));

document.getElementById("iconlink").href = "/logos/" + (userObj.GEPclass.name||userObj.mixedFC.name) + "%202023.png";
document.title = "Homework - " + (userObj.GEPclass.name||userObj.mixedFC.name) + " 2023";

var homework = [
	/*Format:
 
 		classN: "class_name" e.g. "5-3", "5J"
	 	startdate & duedate: new Date(year, month-1, date)
		subject: "subject_name" e.g. "ENGLISH", "CHINESE"
		title: "homeworktitle"
	
 */
	{
		classN: "5J",
		startdate: new Date(2023, 6, 21),
		duedate: new Date(2023, 6, 24),
		subject: "CHINESE",
		title: "笔记12：No.1-6"
	}
]

hw_5l_5_4 = document.getElementsByTagName("iframe")[0].contentWindow;
pars = hw_5l_5_4.document.getElementsByTagName("p")
for (i=0;i<pars.length;i++) {
	spans = pars.children
	obj = {
		classN: undefined,
		startdate: undefined,
		duedate: undefined,
		subject: undefined,
		title: undefined
	}
	obj.classN = spans[0].innerText
	obj.startdate = new Date(spans[1].innerText, spans[2].innerText, spans[3].innerText)
	obj.duedate = new Date(spans[4].innerText, spans[5].innerText, spans[6].innerText)
	obj.subject = spans[7].innerText
	obj.title = spans[8].innerText
	homework.push(obj)
}


hwbody = document.getElementById("tbody")
now = new Date()
days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
userClasses = [JSON.parse(localStorage.getItem("accounts-v2-userObj")).GEPclass.name, JSON.parse(localStorage.getItem("accounts-v2-userObj")).mixedFC.name]
for (j=0;j<homework.length;j++) {
	i = homework[j]

	if (!(userClasses.includes(i.classN || "5-3"))) continue
	
	row = document.createElement("tr")
	
	cell1 = document.createElement("td")
	cell2 = document.createElement("td")
	cell3 = document.createElement("td")
	cell4 = document.createElement("td")

	cell1.innerText = String(i.startdate.getDate()).padStart(2, "0") + "/" + String(i.startdate.getMonth()+1).padStart(2, "0") + " " + days[i.startdate.getDay()]
	cell2.innerText = i.subject
	cell3.innerText = i.title
	cell4.innerText = String(i.duedate.getDate()).padStart(2, "0") + "/" + String(i.duedate.getMonth()+1).padStart(2, "0") + " " + days[i.duedate.getDay()]

	row.appendChild(cell1)
	row.appendChild(cell2)
	row.appendChild(cell3)
	row.appendChild(cell4)
	
	hwbody.appendChild(row)
	startdate = i.startdate
	startdate.setHours(12, 29)
	duedate = i.duedate
	duedate.setHours(12, 29)
	if (startdate > now) {
		row.classList.add("upcoming")
	} else if (duedate < now) {
		row.classList.add("overdue")
	}
}

{
	// Science Trello homework.
	let userGepClass = JSON.parse(localStorage.getItem("accounts-v2-userObj")).GEPclass.name;
	if (/^5\-[34]$/.test(userGepClass)) {
		// Use fetch() to get data from 5-x-2023-info-api/trello/<class>.
		// Then, use .then().catch() syntax to add an iframe with the specified content, or, a <p> element with the text "Sorry, you do not have a linked card."
		fetch("https://5-x-2023-info-api.gohjy.repl.co/trello/" + userGepClass)
			.then((response) => response.body)
			.then((rb) => {
				const reader = rb.getReader();

				return new ReadableStream({
					start(controller) {
						// The following function handles each data chunk
						function push() {
							// "done" is a Boolean and value a "Uint8Array"
							reader.read().then(({ done, value }) => {
								// If there is no more data to read
								if (done) {
									console.log("done", done);
									controller.close();
									return;
								}
								// Get the data and send it to the browser via the controller
								controller.enqueue(value);
								// Check chunks by logging to the console
								console.log(done, value);
								push();
							});
						}
		
						push();
					},
				});
			})
			.then((stream) =>
				// Respond with our stream
				new Response(stream, { headers: { "Content-Type": "text/html" } }).text()
			)
			.then((result) => {
				//1. Add iframe of the person's personal card
				//2. Add link to the main trello board
				//3. Then, save for future reference in global var
			});
	}
}