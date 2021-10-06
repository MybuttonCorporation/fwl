const discord = require('discord.js')

module.exports = 
{
    runner: "delete",
    index: async (client, args, msg) => {
    
    var amount = args[1]
    if (!amount) return msg.reply('No valid amount to delete.')
    msg.channel.bulkDelete(amount)
    const embed = new discord.MessageEmbed()
    .setDescription('**Deleting ' + amount + ' messages...**')
    .setColor('BLUE')
    msg.channel.send(embed).then(m=>{
       
    setTimeout(() => {
        m.edit(embed.setDescription('**Deleted ' + amount+' messages.**'))
    }, 3000);
    m.delete({timeout: 6000})

    })
}}