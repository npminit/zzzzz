
exports.run = (client, message, args) => {
	if(message.group) {
  Storage.setItemSync("updateGroup", message.group.id);
  message.reply(`💠 This group will now recieve war updates\nGroupID: [${message.group.id}]`);
}
}

exports.description = "1.Enables war updates for a group 'announce'"
