let messages = [
	{
		from:	"Aidan",
		message: ""
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
		message: ""
	},
	{
		from:	"Jingxuan",
		message: ""
	},
	{
		from:	"Yi Qun",
		message: ""
	},
	{
		from:	"Xinyuan",
		message: ""
	},
	{
		from:	"Jia En",
		message: ""
	},
	{
		from:	"Brett",
		message: ""
	},
	{
		from:	"Sarah",
		message: ""
	},
	{
		from:	"Xinye",
		message: ""
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
		message: ""
	},
	{
		from:	"Kye",
		message: ""
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
		message: ""
	},
	{
		from:	"Nicole",
		message: ""
	},
	{
		from:	"Sophie",
		message: ""
	},
	{
		from:	"Xinrun",
		message: ""
	},
	{
		from:	"Wayne",
		message: ""
	},
	{
		from:	"Kayle",
		message: ""
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
