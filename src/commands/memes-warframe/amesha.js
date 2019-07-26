const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "amesha",
			group: "memes-warframe"
		})
	}
	
	async run(message, args) {
		let options = [
			{content: "https://youtu.be/sPXBqiMHzi4"}
		]
		this.sendSelect(message, options, args, "Amesha")
	}
}
