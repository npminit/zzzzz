

exports.run = (client, message, args) => {
  client.sendMessage("U72c8327ce5094c29a77613c2605f0a1f", args.join(" "));
  message.reply("Your suggestion has been sent thanks for the feedback!")
}

exports.description = "13.Suggest improvements to the bot `suggest this would be a cool command`"
