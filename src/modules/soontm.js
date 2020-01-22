const emojis = require("./../resources/emojis.json")

/**
 * Reacts with "TM" to a message ending with "soon" in order to keep up the soon™ meme.
 * @param {*} bot The bot client.
 */
module.exports = function(bot){
	bot.on("message", message => {

		//Check if message ends with "soon"
		if(!message.content.toLowerCase().endsWith("soon")) return
		//Check if message was issued on a guild
		if(!message.member) return

		message.react(message.client.guilds.get(emojis.guild).emojis.get(emojis.emojis.soontm))
			.catch(console.error)

	})
}
