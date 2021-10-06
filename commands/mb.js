const discord = require('discord.js')
module.exports = {
    runner: "mb",
    index: (client, args, msg) => {
const embed = new discord.MessageEmbed()
.setAuthor('Mybutton Corporation', 'https://images-ext-2.discordapp.net/external/mjnMsWD6YKWJgvoXsVwNTeYDqTzMK-n4F9mOcOwWGMg/%3Fu%3Dhttps%253A%252F%252Fvignette.wikia.nocookie.net%252Fsnicket%252Fimages%252F2%252F2a%252FNetflixvfdeye_square.png%252Frevision%252Flatest%253Fcb%253D20191001152707%26f%3D1%26nofb%3D1/https/external-content.duckduckgo.com/iu/')
.setDescription('\n> Mybutton Corporation, (AKA - MBT) is the Head of the MBT+ Corporations Founding **(MBC)**, And a child-project of **Internetiseviyorum**.\n\nThe **MBC** Team - \n> Mybutton Corporation \n> **F**arewellNehir **W**atressing **L**\'action Foundation\n> Volunteer Foundations Department\n> The ©yber Project\n> The MBT Incorporation\n> United Breads of the Oven\n> The Mybutton Discord Waitresses\n> The Knights in The Shadow - a Mybutton Company\n> RUN - a Mybutton Redirection Service\n> White Hatteds\n\n__This project is not a child\'s play.__ The [FWL] Development Department is currently the Star of the Foundation, if you would like to support this service consider visiting [mybutton.org](https://mybutton.org/).')
.setColor('BLUE')
.setFooter('The United Mybutton Foundations | © Mybutton Corporation, 2021. | All rights reserved.', 'https://images-ext-2.discordapp.net/external/mjnMsWD6YKWJgvoXsVwNTeYDqTzMK-n4F9mOcOwWGMg/%3Fu%3Dhttps%253A%252F%252Fvignette.wikia.nocookie.net%252Fsnicket%252Fimages%252F2%252F2a%252FNetflixvfdeye_square.png%252Frevision%252Flatest%253Fcb%253D20191001152707%26f%3D1%26nofb%3D1/https/external-content.duckduckgo.com/iu/')
msg.channel.send(embed)
}}