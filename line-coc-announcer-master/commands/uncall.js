const moment = require('moment')
exports.run = (client, message, args) => {
  var number = args[0];
  var warCalls = Storage.getItemSync("warCalls");



  var warData = Storage.getItemSync(warId);
  WarData = Storage.getItemSync(warId);

   var warT = '';
   if (WarData.stats.state === 'preparation') {
     warT = 'War starts ' + moment(WarData.stats.startTime).fromNow()
   } else if (WarData.stats.state === 'inWar') {
     warT = 'War ends ' + moment(WarData.stats.endTime).fromNow()
   } else if (WarData.stats.state === 'warEnded') {
   warT = 'War ended ' + moment(WarData.stats.endTime).fromNow()
   }
   saveme = `${WarData.stats.clan.name} vs ${warData.stats.opponent.name}\n\n            Stars: ${WarData.stats.clan.stars} vs ${WarData.stats.opponent.stars}\n   Percentage: ${WarData.stats.clan.destructionPercentage.toFixed(2)}% vs ${WarData.stats.opponent.destructionPercentage.toFixed(2)}%\n  Timer: ${warT}\n            Attacks: ${WarData.stats.clan.attacks} vs ${WarData.stats.opponent.attacks}\n            3 Stars: ${tc} vs ${otc}          \n            War Size: ${WarData.stats.clan.memberCount} vs ${WarData.stats.opponent.memberCount}`;


  if (warData.stats.state == "warEnded" || !warData) return message.reply("There is no war to be cancelling calls");

  if (number < 1 || number > 50) {
    return message.reply("❎ bases are only between 1 and 30");
  }

  if(warCalls[number] === "empty" ){
	  list((list) => {
    message.reply(`${saveme}\n\n*❎ That base isn\'t called yet*${list}\nUse list appropriately`);
	  })
  } else if (warCalls[number] === "hide") {
    message.reply("❎ Bot trusts game servers more than you that base is already 3 starred")
  } else if (warCalls[number] !== message.author.displayName) {
    var callername = warCalls[number];
	  warCalls[number] = "empty";
    Storage.setItemSync("warCalls", warCalls);

    list((list) => {
  message.reply(`${saveme}\n\n*📛 ${message.author.displayName} has overwritten ${callername}\'s call*${list}\nUse list appropriately`);
  })
  } else {
    warCalls[number] = "empty";
    Storage.setItemSync("warCalls", warCalls);

    list((list) => {
      message.reply(`${saveme}\n\n*🔙 ${number} has been canceled*${list}\nUse list appropriately`);
    })
  }
}
exports.description = "14.Is used for cancelling calls 'uncall'"
