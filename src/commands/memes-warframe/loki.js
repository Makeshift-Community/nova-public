const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "loki",
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508186471596042/loki.png"}}}
		]
		this.sendSelect(message, options, args)
	}
}
