const Discord = require('discord.js')
const os = require('os')
var speedTest = require('speedtest-net');//npm i speedtest-net@1.2 yap yoksa inmiyor bozuk :) embedleri daha güzel yapıp banada atarsan sevinirim :))))) 


module.exports = {
runner: 'connection',
index: (client, args, msg) => {


 
  var osType = os.type();


 
  if (osType === 'Darwin') osType = 'macOS'
  else if (osType === 'Windows') osType = 'Windows'
  else if (osType === 'Linux') osType = 'Linux'
  else if (osType === 'Ubuntu') osType = 'Ubuntu'
  else osType = os.type();
  msg.channel.send(new Discord.MessageEmbed().setColor('BLUE').setAuthor('Measuring connection info, this may take a few moments...')).then(m=>{
      m.delete({timeout: 10000})
  })
    var test = speedTest({maxTime: 5000});
    test.on('data', data => {
const embed = new Discord.MessageEmbed()
 .setColor('BLUE')
.setAuthor('Connectivity Report', 'https://images-ext-2.discordapp.net/external/mjnMsWD6YKWJgvoXsVwNTeYDqTzMK-n4F9mOcOwWGMg/%3Fu%3Dhttps%253A%252F%252Fvignette.wikia.nocookie.net%252Fsnicket%252Fimages%252F2%252F2a%252FNetflixvfdeye_square.png%252Frevision%252Flatest%253Fcb%253D20191001152707%26f%3D1%26nofb%3D1/https/external-content.duckduckgo.com/iu/')


.setDescription(`> :arrow_down: **Download**: \`${data.speeds.download} MB\`\n>  :arrow_up: **Upload**: \`${data.speeds.upload} MB\` \n> :round_pushpin: **Ping**: \`${client.ws.ping}\`\n> :level_slider: **Operating System**: \`Mybutton Server Hosting [Developer Host - 128 GB RAM - Intel i9 9900k CPU] \` \n \n:file_cabinet: **Host**: \`providers.mybutton.org/provider?pt=discord_service&bot_id=fwl&port:8000\``)

.setFooter("ISP Service | FWL", 'https://images-ext-2.discordapp.net/external/mjnMsWD6YKWJgvoXsVwNTeYDqTzMK-n4F9mOcOwWGMg/%3Fu%3Dhttps%253A%252F%252Fvignette.wikia.nocookie.net%252Fsnicket%252Fimages%252F2%252F2a%252FNetflixvfdeye_square.png%252Frevision%252Flatest%253Fcb%253D20191001152707%26f%3D1%26nofb%3D1/https/external-content.duckduckgo.com/iu/')
.setTimestamp()
msg.channel.send(embed)
});
 
    test.on('error', err => {
  console.log(err);
});
}



}