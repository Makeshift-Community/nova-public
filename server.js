//External dependencies
const commando = require("discord.js-commando")
const discordErrorHandler = require("discord.js-handles")

//Load info
const token = require("./token.json")	//I'm an idiot - Thanks for the lesson

//Create new Discord client
const makeshiftbot = new commando.Client({
	commandPrefix : "!",
	unknownCommandResponse : false,
	owner : "153595272465743872"
})

//Load and register commands.
require("./src/commands/index")(makeshiftbot)

let handlerOptions = {
	logAllGuilds: false,
	guilds: [],
	name: "nova-public",
	notify: {
		users: [
			"153595272465743872"
		],
		channels: []
	}
}

discordErrorHandler(makeshiftbot, handlerOptions)

//Load custom modules
require("./src/modules/index")(makeshiftbot)


//*
//Start bot
makeshiftbot.login(token)
	.catch(console.error)
//*/
makeshiftbot
	.on("ready", () => {

		setStatus(makeshiftbot.user)
	})
	.on("shardReady", () => {

		setStatus(makeshiftbot.user)
	})
	.on("shardResume", ()=> {

		setStatus(makeshiftbot.user)
	})


	.on("invalidated", ()=> setStatus(makeshiftbot.user))

function setStatus(user){
	user.setPresence({
		activity: {
			name: "@Nova help",
			type: "PLAYING"
		}
	})
}
