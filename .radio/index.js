const discord = require('discord.js')
const client = new discord.Client();
client.login('ODg3Mzc0MDY3MzQxMDc4NTM4.YUDNgA.h8FsV3kfkz2lx9oEzOIdGda6GL4')


client.on('ready', () => {
    client.user.setActivity( {name: 'Lofi Hip-Hop Radio!', type: "LISTENING", })
client.user.setStatus('idle')
    const radio_channel = client.channels.cache.get('887374921972461578')
    radio_channel.join().then(ch=>{
        const ytdl = require('ytdl-core')
        ch.play(ytdl('https://www.youtube.com/watch?v=5qap5aO4i9A', {
            quality: 'highestaudio',
            highWaterMark: 1 << 25
        }))
    })
})


client.on('message', message =>{
    if (message.content == '--radio') {
        const embed = new discord.MessageEmbed()
        .setColor('BLUE')
        .setAuthor('Streaming Lofi Hip-Hop To the Voice Channel', 'https://images-ext-1.discordapp.net/external/HweIa2hni2KmatY36NEjGDzXdciO0Ryjh6eIDK_EsoY/https/images-ext-2.discordapp.net/external/mjnMsWD6YKWJgvoXsVwNTeYDqTzMK-n4F9mOcOwWGMg/%253Fu%253Dhttps%25253A%25252F%25252Fvignette.wikia.nocookie.net%25252Fsnicket%25252Fimages%25252F2%25252F2a%25252FNetflixvfdeye_square.png%25252Frevision%25252Flatest%25253Fcb%25253D20191001152707%2526f%253D1%2526nofb%253D1/https/external-content.duckduckgo.com/iu/')
       .setDescription('**Lofi Hip-Hop Radio | Beats to relax/study to**\n__`ChilledCow`__ [20k Concurrent Viewers]')
        .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.highsnobiety.com%2Fthumbor%2FQEQoC9kEVuoS3jwz8n_gJ632IUk%3D%2F1600x1067%2Fstatic.highsnobiety.com%2Fwp-content%2Fuploads%2F2020%2F02%2F25170803%2Flofi-girl.jpg&f=1&nofb=1')
       message.channel.send(embed)
        const radio_channel = client.channels.cache.get('887374921972461578')
        radio_channel.join().then(ch=>{
            const ytdl = require('ytdl-core')
            ch.play(ytdl('https://www.youtube.com/watch?v=5qap5aO4i9A', {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }))
        })
    }
})