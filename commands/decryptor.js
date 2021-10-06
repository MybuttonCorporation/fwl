const discord = require('discord.js')

module.exports = {
    runner: 'embed-create',
    index: (client, args, message) => {

        if (!args[1]) message.reply('> **Please input text for the embed.**\n `->embed-create Hello World from FWL!`')
        const embed = new discord.MessageEmbed()
        .setDescription('> **Created Embed**\n| **Code** `' +require('../FWLToken').create({"text": message.content.replace('->embed-create ', ''), "creator": message.author.username})+ '`\n\n> **Note** This [`[embed]`](https://jwt.io/) can be visible to public if the Token is revealed, by using this service you agree to the [`[Mybutton TOS]`](http://run.mybutton.org/tos).')
        .setColor('BLUE')
        message.reply(embed)

    }

}