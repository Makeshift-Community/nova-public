const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "mag",
			group: "memes-warframe",
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508271041347613/mag.jpg"}}}
		]
		this.sendSelect(message, options, args)
	}
}
