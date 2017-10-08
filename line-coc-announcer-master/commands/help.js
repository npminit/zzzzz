const fs = require('fs');


exports.run = (client, message, args) => {
  // This loop reads the /command/ folder and attaches each event file to the appropriate event.

  let helpMessage = "";

  fs.readdir("./commands", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let command = require(`./${file}`);
      let commandName = file.split(".")[0];

      helpMessage += `${command.description}\n`;
    });

    message.author.sendMessage(`Commands:\n\n${helpMessage}`);
    message.reply(`👍${message.author.displayName} Check your DM`)

  });
}

exports.description = "4.Displays the list of commands `help`";
