const moment = require('moment');

exports.run = (client, message, args) => {
	if (message.author.id == 'U72c8327ce5094c29a77613c2605f0a1f') {
	var start= (new Date()).getTime();
  message.reply(`${message.author.displayName}\nID: ${message.author.id}\nTime: ${start}`)
}
else {
message.reply(`You don\'t have enough permission to run this command`)
}

}



exports.description = "6.Gets user IDs 'id' [Not for users]"
