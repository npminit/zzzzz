
exports.run = (client, message, args) => {
  client.sendMessage("U72c8327ce5094c29a77613c2605f0a1f", args.join(" "));
  message.reply("Your issue has been reported\nThanks for the feedback!")
}

exports.description = "10.Report issues with the bot `Report the help command isn't working`"
