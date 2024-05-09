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
		message: "Thank you Mr Darren for taking care of the bookshop and helping to sell stationery to all the kids who need it. \
			Whenever I go to the bookshop you are nice to everyone, making buying school items a cheerful task"
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
		message: "Thank you so much for selling things that are useful to us!"
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
		message: "Thank you for being so kind to us!"
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
		message: "Thank you for helping me find what I need in the bookshop!"
	},
	{
		from:	"Kye",
		message: "Thanks for selling us useful things!"
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
		message: "Thank you for being so patient even when we are so annoying"
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
