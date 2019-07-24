var { Command } = require("discord.js-commando");

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: "rsb",
			aliases: [
				"wfrsb",
				"rsb",
				"schoolbus",
				"raidschoolbus"
			],
			group: "resources",
			memberName: "rsb",
			description: "Warframe raid schoolbus Discord"
		});
	}

	async run(msg) {
		msg.react("✅");
		return msg.channel.send("https://discord.gg/wfrsb");
	}
};
