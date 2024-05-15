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
		message: "Thanks for giving me a place to spend money and making me feel rich!"
	},
	{
		from:	"Yi Qun",
		message: "Thank you for providing us with stationery! \
			You might want to consider not selling toys as it can be disruptive when people are playing in class. \
			Also, you could make your prices more affordable so that students will buy from you instead of \
			places like Popular (currently 50% cheaper)."
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
		message: "Thank you Mr Darren!"
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
		message: "Thank you for providing us with necessities we need for school!"
	},
	{
		from:	"Chenye",
		message: "Thank you for helping us out by selling stationery! You have saved me many times!"
	},
	{
		from:	"Richelle",
		message: "Thank you Mr Darren!"
	},
	{
		from:	"Jun Ying",
		message: "Thank you for helping me find what I need in the bookshop!"
	},
	{
		from:	"Kye",
		message: "Thanks for selling me stationery! You have really helped me out!"
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
		message: "Thank you for selling me stuff! You are the reason I don't get killed by my Science teacher."
	},
	{
		from:	"Zechen",
		message: "You are very friendly and also helpful!"
	},
	{
		from:	"Haoran",
		message: "Thank you for being very kind to me when I purchase stationery!"
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
		message: "Thank you for selling stationery and note books to us!"
	},
	{
		from:	"Kayle",
		message: "Thank you so much for working hard every day to sell things!"
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
