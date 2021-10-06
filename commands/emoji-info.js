const discord = require('discord.js')

module.exports = {
    runner: 'ani-emoji-info',
    index: (client, args, message) => {
        if (!args[1]) return message.channel.send('> <a:fwl_error_type_14:894980675986415616> **Specify an emoji to show info.**')
        const m = message.guild.emojis.cache.find(emoji=>emoji.name === args[1])
        if (!m) message.channel.send('> <a:fwl_error_type_14:894980675986415616> **Could not find '  +args[1]+'.**')
    message.reply(new discord.MessageEmbed().setColor('BLUE').setDescription('> <a:' +m.name+':' +m.id+'>**' +m.name+ '**\n\n:id: **ID** __`' +m.id+'`__\n⭐ **Look** <a:' +m.name+':' +m.id+'>\n\nBy using [`[FWL]`](https://mybutton.org/coffee-projects) you agree to the [`[Mybutton TOS]`](http://run.mybutton.org/tos/).'))
    }
}