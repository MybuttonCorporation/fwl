module.exports = {
    runner: "icon",
    index: (client, args, msg) => {
    const discord = require('discord.js')
    const embed = new discord.MessageEmbed()
    .setDescription('> This image is copyrighted. Any use of this image will be used as evidence for copyright.')
    .setImage('https://images-ext-2.discordapp.net/external/mjnMsWD6YKWJgvoXsVwNTeYDqTzMK-n4F9mOcOwWGMg/%3Fu%3Dhttps%253A%252F%252Fvignette.wikia.nocookie.net%252Fsnicket%252Fimages%252F2%252F2a%252FNetflixvfdeye_square.png%252Frevision%252Flatest%253Fcb%253D20191001152707%26f%3D1%26nofb%3D1/https/external-content.duckduckgo.com/iu/')
    .setColor('BLUE')
    msg.reply(embed)
}}