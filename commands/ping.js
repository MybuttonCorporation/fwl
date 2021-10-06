const discord = require('discord.js')
module.exports = 
{
    runner: "ping",
    index: (client, args, msg) => {
    var ping = {}
    if (client.ws.ping < 2) {
        ping.color = "GREEN"
        ping.situation = "OH MY GOD! 1 PING! THE BEST!!!!! PROGAMER!!!!"
    }
    
    if (client.ws.ping < 159) {
        ping.color = "GREEN"
        ping.situation = "Perfect!"
    }   
    if (client.ws.ping > 159) {
        ping.color = "GREEN"
        ping.situation = "Perfect!"
    }   
     if (client.ws.ping > 500) {
        ping.color = "ORANGE"
        ping.situation = "Normal"
    }
    if (client.ws.ping > 1000) {
        ping.color = "RED"
        ping.situation = "Terrible. Bot Requires restart / is just starting / too many commands being handeled at once"
    }
    const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The server is using approximately ${Math.round(used * 100) / 100} MB`);
    const embed = new discord.MessageEmbed()
    .setTitle('🏓Ping')
    .setDescription('**-----------------------------------------------------**\n🍜Memory Usage: **' +Math.round(used * 100) / 100+' MB**\n🪑Situation: **' +ping.situation+'**\n🏓Overall Ping: **' +client.ws.ping+'ms**\n🏓Current Shard Ping: **' + client.ws.ping+'ms**\n🏓Commandhandler Response Time: **' +client.ws.ping+'ms**\n**-----------------------------------------------------**')
    .setColor(ping.color)
msg.reply(embed)
}}