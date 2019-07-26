const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "rhino",
			group: "memes-warframe",
		})
	}
	
	async run(message, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439744908501188618/rhino.jpg"}}}
		]
		this.sendSelect(message, options, args)
	}
}
