const discord = require('discord.js')
module.exports = {
    runner: 'keychain',
    index: (client, args, msg) =>  {
        const embed = new discord.MessageEmbed()
        .setDescription('> **Keychain information**\n\n`Terms of Service` [mybutton.org](https://run.mybutton.org/redir?p=https://run.mybutton.org/tos)')
    }
}