var funcs = require('../util/functions');

exports.run = (client, message, args) => {

  if (args[0]) {
    funcs.getPlayer(args[0].toUpperCase().replace(/O/g, '0'), data => {

      if (data && !data.hasOwnProperty('reason')) {

        let troopLevels = ''
        let count = 0
        data.troops.forEach(troop => {
          troopLevels += `${troop.name}:${troop.level}`
          if (count > 0 && count % 7 === 0) {
            troopLevels += `\n`
          } else {
            if (troop.level === troop.maxLevel) {
              troopLevels +=  '*\n'
            } else {
              troopLevels +=  '\n'
            }
          }
          count++
        })

        let spellLevels = ''
        count = 0
        data.spells.forEach(spell => {
          spellLevels += `${spell.name}:${spell.level}`
          if (count > 0 && count % 7 === 0) {
            spellLevels += '\n'
          } else {
            if (spell.level === spell.maxLevel) {
              spellLevels +=  '*\n'
            } else {
              spellLevels +=  '\n'
            }
          }
          count++
        })

        let heroLevels = ''
        count = 0
        data.heroes.forEach(hero => {

          heroLevels += `${hero.name}:${hero.level}`
          if (count > 0 && count % 7 === 0) {
            heroLevels += '\n'
          } else {
            if (hero.level === hero.maxLevel) {
              heroLevels +=  '*\n'
            } else {
              heroLevels += `\n`
            }
          }
          count++
        })

        var playerMsg = `Name:${data.name}\nTag:${data.tag}\n\nClan:${data.clan.name}\nClanTag:${data.clan.tag}\n\nTroopLevels:\n${troopLevels}\n\nSpellLevels:\n${spellLevels}\n\nHeroLevels:\n${heroLevels}`

        message.reply(playerMsg);
      }
    })
  } else {
    message.reply('Please provide a player tag to look up.\n\nplayerstats #playertag')
  }
}

exports.description = "9.Check player's profile `playerstats #playertag`";
