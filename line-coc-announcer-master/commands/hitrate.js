
exports.run = (client, message, args) => {

  if (args[0]) {
    let clanTag = args[0].toUpperCase().replace(/O/g, '0')
    if (Clans[clanTag]) {

      let WarData = Clans[clanTag].getWarData()
      if (WarData) {
        discordHitrateMessage(WarData, message);
      } else {
        message.reply('War data is missing try again in a little bit. I might still be fetching the data.')
      }
    } else {
      message.reply('I don\'t appear to have any war data for that clan.')
    }
  } else {

      let WarData = Storage.getItemSync(warId)
      if (WarData) {
        discordHitrateMessage(WarData, message);
      } else {
        message.reply('War data is missing try again in a little bit. I might still be fetching the data.')
      }

  }
}

discordHitrateMessage = (WarData, msg) => {

  if (WarData.stats.state === 'inWar' || WarData.stats.state === 'warEnded') {

    var WarMsg = "Attack Hitrate \n"
    WarMsg += `${WarData.stats.clan.name}  vs  ${WarData.stats.opponent.name}\n`

    if (WarData.stats.hitrate.TH9v9.clan.attempt > 0 || WarData.stats.hitrate.TH9v9.opponent.attempt > 0) {
      let clan9v9 = 'N/A'
      if (WarData.stats.hitrate.TH9v9.clan.attempt > 0) clan9v9 = `Success: ${WarData.stats.hitrate.TH9v9.clan.success}\nAttemps: ${WarData.stats.hitrate.TH9v9.clan.attempt}\nSuccessRate: ${Math.round(WarData.stats.hitrate.TH9v9.clan.success / WarData.stats.hitrate.TH9v9.clan.attempt * 100, 2)}%`
      let opponent9v9 = 'N/A'
      if (WarData.stats.hitrate.TH9v9.opponent.attempt > 0) opponent9v9 = `Success: ${WarData.stats.hitrate.TH9v9.opponent.success}\nAttemps: ${WarData.stats.hitrate.TH9v9.opponent.attempt}\nSuccessRate: ${Math.round(WarData.stats.hitrate.TH9v9.opponent.success / WarData.stats.hitrate.TH9v9.opponent.attempt * 100, 2)}%`
      WarMsg += `________TH9 vs TH9 Stats________\n`
      WarMsg += `Clan:\n${clan9v9}\nOpponent:\n${opponent9v9}\n`

    }
    if (WarData.stats.hitrate.TH10v10.clan.attempt > 0 || WarData.stats.hitrate.TH10v10.opponent.attempt > 0) {
      let clan10v10 = 'N/A'
      if (WarData.stats.hitrate.TH10v10.clan.attempt > 0) clan10v10 = `Success: ${WarData.stats.hitrate.TH10v10.clan.success}\nAttemps: ${WarData.stats.hitrate.TH10v10.clan.attempt}\nSuccessRate: ${Math.round(WarData.stats.hitrate.TH10v10.clan.success / WarData.stats.hitrate.TH10v10.clan.attempt * 100, 2)}%`
      let opponent10v10 = 'N/A'
      if (WarData.stats.hitrate.TH10v10.opponent.attempt > 0) opponent10v10 = `Success: ${WarData.stats.hitrate.TH10v10.opponent.success}\nAttemps: ${WarData.stats.hitrate.TH10v10.opponent.attempt}\nSuccessRate: ${Math.round(WarData.stats.hitrate.TH10v10.opponent.success / WarData.stats.hitrate.TH10v10.opponent.attempt * 100, 2)}%`
      WarMsg += `_______TH10 vs TH10 Stats______\n`
      WarMsg += `Clan:\n${clan10v10}\nOpponent:\n${opponent10v10}\n`
    }
    if (WarData.stats.hitrate.TH10v11.clan.attempt > 0 || WarData.stats.hitrate.TH10v11.opponent.attempt > 0) {
      let clan10v11 = 'N/A'
      if (WarData.stats.hitrate.TH10v11.clan.attempt > 0) clan10v11 = `Success: ${WarData.stats.hitrate.TH10v11.clan.success}\nAttemps: ${WarData.stats.hitrate.TH10v11.clan.attempt}\nSuccessRate: ${Math.round(WarData.stats.hitrate.TH10v11.clan.success / WarData.stats.hitrate.TH10v11.clan.attempt * 100, 2)}%`
      let opponent10v11 = 'N/A'
      if (WarData.stats.hitrate.TH10v11.opponent.attempt > 0) opponent10v11 = `Success: ${WarData.stats.hitrate.TH10v11.opponent.success}\nAttemps: ${WarData.stats.hitrate.TH10v11.opponent.attempt}\nSuccessRate: ${Math.round(WarData.stats.hitrate.TH10v11.opponent.success / WarData.stats.hitrate.TH10v11.opponent.attempt * 100, 2)}%`
      WarMsg += `________TH10 vs TH11 Stats______\n`
      WarMsg += `Clan:\n${clan10v11}\nOpponent:\n${opponent10v11}\n`
    }
    if (WarData.stats.hitrate.TH11v11.clan.attempt > 0 || WarData.stats.hitrate.TH11v11.opponent.attempt > 0) {
      let clan11v11 = 'N/A'
      if (WarData.stats.hitrate.TH11v11.clan.attempt > 0) clan11v11 = `Success: ${WarData.stats.hitrate.TH11v11.clan.success}\nAttemps: ${WarData.stats.hitrate.TH11v11.clan.attempt}\nSuccessRate: ${Math.round(WarData.stats.hitrate.TH11v11.clan.success / WarData.stats.hitrate.TH11v11.clan.attempt * 100, 2)}%`
      let opponent11v11 = 'N/A'
      if (WarData.stats.hitrate.TH11v11.opponent.attempt > 0) opponent11v11 = `Success: ${WarData.stats.hitrate.TH11v11.opponent.success}\nAttemps: ${WarData.stats.hitrate.TH11v11.opponent.attempt}\nSuccessRate: ${Math.round(WarData.stats.hitrate.TH11v11.opponent.success / WarData.stats.hitrate.TH11v11.opponent.attempt * 100, 2)}%`
      WarMsg += `_______TH11 vs TH11 Stats______\n`
      WarMsg += `Clan:\n${clan11v11}\nOpponent:\n${opponent11v11}\n`
    }

    msg.reply(WarMsg);
  } else {
    msg.reply('No hitrate stats for this war check back later.')
  }
}
exports.description = "5.Check current war hitrate stats'hitrate'"
