var { Command } = require("discord.js-commando")
var selectRandomly = require("./../../utils/selectRandomly")

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "octavia",
			aliases: [
				"octavia"
			],
			group: "memes-warframe",
			memberName: "octavia",
			description: "Octavia"
		})
	}
	
	async run(msg, args) {
		var options = [
			{embed: {description: "Artwork by [rinkhet](http://rinkhet.tumblr.com/)", image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508630522298388/octavia.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439931915534073875/octavia2.jpg"}}}
		]
		var choice = selectRandomly(options, args)
		var out = (options.length > 1)?`${this.name} ${options.indexOf(choice) + 1}/${options.length}`:""
		try {
			if(out) {
				if(choice.embed){
					await msg.channel.send(out, choice)
				}
				else {
					await msg.channel.send(`${out}\n${choice}`)
				}
			}
			else {
				await msg.channel.send(choice)
			}
			msg.react("✅")
		} catch (e) {
			console.error(e)
		}
	}
}
