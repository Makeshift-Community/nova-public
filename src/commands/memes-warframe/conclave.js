const Command = require("../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "conclave",
			aliases: ["cc"],
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		let options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503344982294570/cc.png"}}}
		]
		this.sendSelect(message, options, args, "Conclave")
	}
}
