const moment = require('moment')
exports.run = (client, message, args) => {
  var list = ""
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

  warCalls.forEach((call, index) => {
    if (index == 0) {

    } else if (call === "empty") {
      list += `${index}.\n `
    }
  })


  message.reply(`${saveme}\n${list}\nUse list appropriately`);
}

exports.description = "7.Check what bases aren't called `open`";
