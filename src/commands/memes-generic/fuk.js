const Command = require("./../../utils/novaCommand")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "fuk",
			group: "memes-generic",
			description: "When trusting a fart goes wrong"
		})
	}
	
	async run(message) {
		try {
			await message.channel.send({embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439493096548466698/fuk.png"}}})
			message.react("✅")
		} catch (error) {
			console.error(error)
		}
	}
}
