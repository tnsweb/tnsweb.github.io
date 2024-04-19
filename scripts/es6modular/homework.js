// ES6 Module
import * as userInfo from "./userInfo.js";
import {update as updateTitleAndLogo} from "./setTitleAndLogo.js";

console.log("homework.js: JS module execution started");

updateTitleAndLogo("Homework", document.querySelector("#iconlink"));

fetch("/homework.json")
	.then(resp => {
		if (!resp.ok) {
			return [];
		}
		let hwObj = await resp.json();
		hwObj.startdate = new Date(...hwObj.startDate);
		hwObj.duedate = new Date(...hwObj.duedate);
		return hwObj;
	})
	.then(hwObj => {
		let hwbody = document.querySelector("#tbody");
		let now = new Date();
		const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
		let userClasses = [userInfo.userGEPClass.name, userInfo.userMFClass.name];
		for (j=0;j<homework.length;j++) {
			let i = homework[j];
		
			if (!userClasses.includes(i.classN ?? "5-3")) continue;
			
			let row = document.createElement("tr")
			
			let cell1 = document.createElement("td");
			let cell2 = document.createElement("td");
			let cell3 = document.createElement("td");
			let cell4 = document.createElement("td");
		
			cell1.textContent = `${i.startdate.getDate().toString().padStart(2, "0")}/${( i.startdate.getMonth()+1).toString().padStart(2, "0")} ${days[i.startdate.getDay()]}`;
			cell2.textContent = i.subject;
			cell3.textContent = i.title;
			cell4.textContent = `${i.duedate.getDate().toString().padStart(2, "0")}/${(i.duedate.getMonth()+1).toString().padStart(2, "0")} ${days[i.duedate.getDay()]}`;
		
			row.append(cell1, cell2, cell3, cell4);
			hwbody.append(row);
			
			let startdate = new Date(i.startdate);
			startdate.setHours(12, 29);
			let duedate = new Date(i.duedate);
			duedate.setHours(12, 29);
			if (startdate > now) {
				row.classList.add("upcoming");
			} else if (duedate < now) {
				row.classList.add("overdue");
			}
		}
	})
	.catch(err => {
		if (err instanceof NetworkError) {
			document.querySelector("#hwtable").remove();
			document.querySelector("footer").textContent = "There was a network error. Please check your internet connection and try again.";
		}
	});