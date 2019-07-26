const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "duke",
			aliases: ["dark_prince_duke", "sr-ahmed.duke"],
			group: "memes-makeshift",
			description: "Duke"
		})
	}

	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495672941772820/duke.png"}}}
		]
		this.sendOne(message, options, args, "Duke")
	}
}
