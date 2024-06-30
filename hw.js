let userObj = JSON.parse(localStorage.getItem("accounts-v2-userObj"));
const isGuest = !!userObj.guest;

document.getElementById("iconlink").href = "/logos/logo.png";
document.title = "Homework - " + (userObj.GEPclass.name||userObj.mixedFC.name) + " 2024";

let homework = [
	/*Format:
 
 		classN: "class_name" e.g. "5-3", "5J"
	 	startdate & duedate: new Date(year, month-1, date)
		subject: "subject_name" e.g. "ENGLISH", "CHINESE"
		title: "homeworktitle"
	
 */
]


if (!isGuest) {

	let hwbody = document.getElementById("tbody")
	let now = new Date()
	let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
	let userClasses = [userObj.GEPclass.name, userObj.mixedFC.name]
	for (j=0;j<homework.length;j++) {
		i = homework[j]
	
		if (!userClasses.includes(i.classN)) continue
		
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
}
