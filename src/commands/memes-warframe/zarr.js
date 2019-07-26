const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "zarr",
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439510352649256970/zarr.png"}}}
		]
		this.sendSelect(message, options, args)
	}
}
