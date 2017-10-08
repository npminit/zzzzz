const moment = require('moment')
exports.run = (client, message, args) => {
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

  let number = args[0]


  if (warData.stats.state == "warEnded" || !warData) return message.reply("There is no war to be calling oponents");

  if (number < 1 || number > 50) {
    return message.reply("❎ Base doesn\'t exist");
  }
  var user = args[1];
  if (user) {
    if(warCalls[number] === "empty"){
        warCalls[number] = user;
        Storage.setItemSync("warCalls", warCalls);
        list((list) => {
          message.reply(`${saveme}\n\n*✔ ${warCalls[number]} has called ${number}*${list}\nUse list appropriately`);
        })
      }
      else {
        list((list) => {
        message.reply(`${saveme}\n\n *❌ ${number} is taken by ${warCalls[number]}*${list}\nUse list appropriately`);
    	  })
      }

    }
  if(warCalls[number] === "empty"){
    warCalls[number] =  `${message.author.displayName}`;
    Storage.setItemSync("warCalls", warCalls);
    list((list) => {
      message.reply(`${saveme}\n\n*⏩ ${warCalls[number]} has called ${number}*${list}\nUse list appropriately`);
    })
  } else if (warCalls[number] === "hide") {
    message.reply("❌ Bot trusts game servers more than you that base is already 3 starred")
  } else {
	  list((list) => {
    message.reply(`${saveme}\n\n *❌ ${number} is taken by ${warCalls[number]}*${list}\nUse list appropriately`);
	  })
  }
}
exports.description = "3.Is used for base calling 'Call 7/Call 7 Mini'"
