 const moment = require('moment')
exports.run = (client, message, args) => {
 if (message.author.id == 'U72c8327ce5094c29a77613c2605f0a1f') {
       var start= (new Date()).getTime();
       message.author.sendMessage(`Pong`);
       var now = (new Date()).getTime();
       var diff = now - start;
         message.reply(`${diff}ms`);
  }
  else {
  message.reply(`You don\'t have enough permission to run this command`)
  }
}
exports.description = "8.Check bot's response time 'Ping' [Not for users]"
