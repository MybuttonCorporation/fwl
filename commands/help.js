const discord = require('discord.js')
module.exports = 
{
    runner: "help",
    index: (client, args, msg) => {
const embed = new discord.MessageEmbed()
.setAuthor(' - [FWL] | A Mybutton Corporation Service Bot ', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fsnicket%2Fimages%2F2%2F2a%2FNetflixvfdeye_square.png%2Frevision%2Flatest%3Fcb%3D20191001152707&f=1&nofb=1')
.setDescription('\n`License` - **FWL is a Mybutton child-company. All rights are reserved. For more information visit the [Mybutton Terms and Service](http://run.mybutton.org/tos) Page.**\n\n`The Prefix` **FWL\'s default prefix is `"->"`.**\n`Command Handling` **FWL uses a custom module exportation system developed by mybutton, this way is kept private for publicity reasons.**\n`The Team Behind the Scene` **the FWL team is the following:**\n> FarewellNehir `Mybutton Corporation CEO`\n> li0n `Mybutton Corporation Developer`\n> 9Jester `Mybutton Corporation Developer`\n> & 256 more...\n\n`Image Copyright` **FWL\'s profile picture is the [George Orwell 1984 Book Picture](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheaquariusbus.com%2Fwp-content%2Fuploads%2F2019%2F07%2FGeorge-Orwells-1984-768x457.jpg&f=1&nofb=1)**.')
.setFooter(' - [FWL] | MBCSB | © 2021 ', 'https://cdn.discordapp.com/avatars/873627667923079188/87486710fd177656cbb4c663fb742fca.webp')
.setColor('BLUE')
msg.channel.send(embed)
}}