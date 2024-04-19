if (
	(localStorage.getItem("local-gep") !== "5-3") && (localStorage.getItem("ntsad") !== "digicard") && (!((localStorage.getItem("onlyAllowed").split(",").includes(location.pathname + location.search + location.hash))))
) {
	location.replace("/assets/error/no-access-right.html");
}


var messages = [
	/*pre-filled for 5-3*/
	{
		from:	"Aidan",
		message: "Thank you for preparing all out science experiments!"
	},
	{
		from:	"Amanda",
		message: ""
	},
	{
		from:	"Zihan",
		message: ""
	},
	{
		from:	"Ian",
		message: "Thank you for helping take care of the science lab for so many classes."
	},
	{
		from:	"Jingxuan",
		message: "Thank you!"
	},
	{
		from:	"Yi Qun",
		message: ""
	},
	{
		from:	"Xinyuan",
		message: "Thank you for making our science experiments possible!"
	},
	{
		from:	"Jia En",
		message: `Dear Aunty Catherine,
Even though we do not know you that well, thank you for all your hard work in TNS! Because of you, we have all our materials ready for our Science Lab lessons :)`
	},
	{
		from:	"Brett",
		message: "Thank you auntie catherine"
	},
	{
		from:	"Sarah",
		message: "Thank you for preparing all of our science experiments!"
	},
	{
		from:	"Xinye",
		message: "Thank you for the neat and organised science labs!"
	},
	{
		from:	"Xander",
		message: ""
	},
	{
		from:	"Muen",
		message: ""
	},
	{
		from:	"Chenye",
		message: ""
	},
	{
		from:	"Richelle",
		message: ""
	},
	{
		from:	"Jun Ying",
		message: "Thank you for helping to organise the Science labs!"
	},
	{
		from:	"Kye",
		message: "How has it been? I hope you're having a nice time in TNS"
	},
	{
		from:	"Mingze",
		message: ""
	},
	{
		from:	"Yunxi",
		message: ""
	},
	{
		from:	"Jaycus",
		message: ""
	},
	{
		from:	"Zechen",
		message: ""
	},
	{
		from:	"Haoran",
		message: "Thank you for helping us prepare all the science equipment we need for our science lessons. I really appreciate your help!"
	},
	{
		from:	"Nicole",
		message: "Thank you Auntie Catherine for helping us with all the science equipment!"
	},
	{
		from:	"Sophie",
		message: "Thank you for preparing the lab materials!"
	},
	{
		from:	"Xinrun",
		message: "Thank you for helping us with science experiments!"
	},
	{
		from:	"Wayne",
		message: "Thank you for organizing the science labs and preparing all the materials that the school need for science experiments"
	},
	{
		from:	"Kayle",
		message: "I love you"
	},
];


for (let msg of messages) {
	let sticky = document.createElement("stickytag");
	sticky.setAttribute("author", msg.from);
	sticky.innerText = msg.message;
	if (msg.message !== "") {
		document.querySelector("#sticky-holder").appendChild(sticky);
	}
}