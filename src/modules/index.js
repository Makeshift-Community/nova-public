module.exports = function (client) {
	require("./sassynova")(client)
	require("./soontm")(client)
	console.log("Nova modules loaded.")
}
