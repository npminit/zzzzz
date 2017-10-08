const moment = require('moment')

exports.run = (client, message, args) => {
  if (args[0]) {
    let clanTag = args[0].toUpperCase().replace(/O/g, '0')
    if (Clans[clanTag]) {
      let WarData = Clans[clanTag].getWarData()
      if (WarData) {
        discordStatsMessage(WarData, message)
      } else {
        message.reply('War data is missing try again in a little bit. I might still be fetching the data.')
      }
    } else {
      message.reply('I don\'t appear to have any war data for that clan.')
    }
  } else {

    let WarData = Storage.getItemSync(warId)
    if (WarData) {
      discordStatsMessage(WarData, message)
    } else {
      message.reply('War data is missing try again in a little bit. I might still be fetching the data.')
    }

  }
}

exports.description = "see war stats for the current war";

function discordStatsMessage(WarData, message) {
  let extraMessage = ''
  if (WarData.stats.state === 'preparation') {
    extraMessage = 'War starts ' + moment(WarData.stats.startTime).fromNow()
  } else if (WarData.stats.state === 'inWar') {
    extraMessage = 'War ends ' + moment(WarData.stats.endTime).fromNow()
  } else if (WarData.stats.state === 'warEnded') {
  extraMessage = 'War ended ' + moment(WarData.stats.endTime).fromNow()
  }
  var dp = (WarData.stats.clan.destructionPercentage).toFixed(2)
  var dp1 = (WarData.stats.opponent.destructionPercentage).toFixed(2)
  var StatsMsg = `${WarData.stats.clan.name} vs ${WarData.stats.opponent.name}\n${extraMessage}`

  StatsMsg += "\n"
  StatsMsg += `Stars: ${WarData.stats.clan.stars} vs ${WarData.stats.opponent.stars}\n`
  StatsMsg += `DestructionPercentage\n${dp}% vs ${dp1}%\n`
  StatsMsg += `Attacks: ${WarData.stats.clan.attacks} vs ${WarData.stats.opponent.attacks}\n`
  StatsMsg += `MemberCount: ${WarData.stats.clan.memberCount} vs ${WarData.stats.opponent.memberCount}`




  message.reply(StatsMsg)
}
exports.description = "16. Check war stats of war `warstats`"
