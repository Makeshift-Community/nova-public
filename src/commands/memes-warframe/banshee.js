const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "banshee",
			aliases: ["bancheese", "afkfarm", "xini"],
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503238585384961/banshee.jpg"}}}
		]
		this.sendSelect(message, options, args, "Banshee")
	}
}
