
module.exports = 
{
    runner: "nick",
    index: (client, args, msg) => {
        
    const nick = ''+ msg.content.replace('->nick ', '') +''
    if (!args[1]) {
        msg.reply('Nick too small.')
    } else {
        if (msg.guild.me.hasPermission('CHANGE_NICKNAME')) {
            msg.guild.me.setNickname(nick)
            setTimeout(() => {
                msg.reply('Nickname changed!')
            }, 1000);
        } else {
            msg.reply('Error: client.user.setNickname(guild, nickname): returned false; BOT_DOES_NOT_HAVE_PERMISSION')
        }
    }
}
}

