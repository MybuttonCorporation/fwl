const waitress = new Set()
const etc = {
    icon: 'https://images-ext-2.discordapp.net/external/mjnMsWD6YKWJgvoXsVwNTeYDqTzMK-n4F9mOcOwWGMg/%3Fu%3Dhttps%253A%252F%252Fvignette.wikia.nocookie.net%252Fsnicket%252Fimages%252F2%252F2a%252FNetflixvfdeye_square.png%252Frevision%252Flatest%253Fcb%253D20191001152707%26f%3D1%26nofb%3D1/https/external-content.duckduckgo.com/iu/'
}
const discord = require('discord.js')
const client = new discord.Client()
var song = {}
song.current = "-none playing-"
song.dispatcher = "none"
//define mybutton.token()
const token = require("./item_types/token.type")
var botToken = new token("ODczNjI3NjY3OTIzMDc5MTg4.YQ7LKw.cS_wS_FDFOE18NkQE5Y_14XQRCc")

function fwlog(text) {
    const channel = client.channels.cache.get("875067403439063053")
    channel.send(`> log;fwlog - ${text}`)
} 


//define mybutton
var mybutton = {
    valueBin: {
        //mybutton.valueBin(): component | valuebin; || TYPESCRIPT
    }
} 

client.on('message', message => {
    if (message.content.startsWith("->")) {
fwlog("a message that has the FWL prefix has been sent. [->]\n**Executed by: " +message.author.username+"**")
if (message.content != "->") {
    fwlog("Recieved new Command. [" +message.content+"]\n**Executed by: " +message.author.username+"**")
}
    }
})
function testfwlcmd(text) {
    if (`${text}`.includes("->")) {
        return true;
    } else       {
         return false;
    }
}
function filter(text, subtext) {

    return `${text}`.replace(subtext, "");

}
client.on('message', message => {
if (testfwlcmd(message.content)) {
const command = filter(message.content, "->")   
if (command == "test") {
    var ranklist = {
        owner: "[OWNER]",
        admin: "[ADMIN]",
        tester: "[TESTER]",
        helper: "[HELPER]",
        vip: "[VIP]",
        developer: "[DEVELOPER]"
    }
    var users = new Map()
    users.set("711886425557041172", ranklist.developer)
       users.set("782616096146456597", ranklist.owner)
       users.set("588386959492251658", ranklist.admin)
       users.set("669083155776536596", ranklist.vip) 


    function getuser(id) {
        return users.get(`${id}`)
    } 
    userrank = "[USER]";
    if (users.has(message.author.id)) {
        userrank = getuser(message.author.id)
    }
    const embed = new discord.MessageEmbed()

    .setDescription("**----------------------------------------------------------**\n> FWL Test Bot - Success.\n> FWL Account: `" +userrank +" " + message.author.username+"`\nThe bot has responded to your test command!\n\n**Information**\n>🏓**Ping**: __" +client.ws.ping+"__\n>⏳**Uptime**: __" +client.uptime+"__\n**----------------------------------------------------------**")
    .setColor('GREEN')
message.reply(embed)
}
}
})


client.on('message' , message => {
    if (testfwlcmd(message.content)) {
        if (message.content.startsWith('->leave')) {
if (!client.voice.connections.get(message.guild.id)) {
    message.reply('Error: client.voiceChannel.Audio.StopError: Client not in voice channel.')

}  else {
    client.voice.connections.get(message.guild.id).channel.leave()
    message.reply('Success: client.voiceChannel.Audio.stop(): returned true. Left voice channel')
}
        }}})




client.on('message' , async message => {

        if (message.content.startsWith('->audio')) {
            if (client.voice.connections.has(message.guild.id)) {
                client.voice.connections.get(message.guild.id).voice.channel.leave()
            }
            const embed = new discord.MessageEmbed()
            const yts = require('yt-search')

const r = await yts( message.content.replace('->audio ', '') )
if (r.videos.length < 1) return message.reply(
    new discord.MessageEmbed()
    
    .setDescription('> **Unable to find this video.**\n\n`The Mybutton API provides lots of\naudio to the public, but this specific\nvideo was not found.`\n\n__By Using [`[FWL]`](https://mybutton.org/coffee-projects) you agree to the [`[Mybutton TOS]`](http://run.mybutton.org/tos).__')
.setColor('RED')
    )
lodefile = "NONE"
id = "-ERROR- NONE"
embed.
setDescription('**Searching for videos...**\nI am now looking for videos relevant to: ' + message.content.replace('->audio ', '') +"\n\n")

.setColor('BLUE')
await message.channel.send(embed).then(
    m=>{
        setTimeout(() => {
m.edit(embed.setDescription('**Creating Dataqueue...**')).then(m2=>{
    setTimeout(() => {
m2.edit(embed.setDescription('**Joining channel...**')).then(m3=> {
    setTimeout(() => {
        id = m3.id;
m3.edit(embed.setDescription('**Playing audio...**').setThumbnail('https://cdn.discordapp.com/emojis/845339038131290132.gif?v=1'))
lodefile = m3.id;
    }, 500)
})
    }, 500)
})
        }, 1500)
    }
)

const videos = r.videos.slice( 0, 1 )
videos.forEach( function ( v ) {
	const views = String( v.views ).padStart( 10, ' ' )
    const ytdl = require('ytdl-core')

    if (!message.member.voice.channel) {
        message.reply('No Channel to fetch audio to. Join a voice channel.')
    return;
    }
    const channel = message.member.voice.channel;
    if (!channel.joinable) return message.reply('cant do that')
    channel.join()
    channel.join().then(ch=>{
        try {
            
            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            const s =new discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription('**Now Playing Audio to: ' + channel.name + "**\n\n**Title.Video**: [" +v.title+"](http://run.mybutton.org/redir?p=" +v.url+ ")\n**Views.Video**: 🪟" +numberWithCommas(parseInt(views))+"\n**Author.Video**: 👉[" + v.author.name+ "](" +"http://run.mybutton.org/redir?p=" + v.author.url+")\n\n**Settings**: \nvar settings_audiochannel = {\nloop: true,\nquality: \"hd\",\n bitrate: 16000\n}\n__To Leave, type '->leave'.__")
            .setImage(v.image)
            message.reply(
s
                ).then(m=>{
                    m.delete({timeout: 10000, reason: 'fwl.commands.execute("1qA6y3s"): deleteMessageAfter3Seconds.'})

                })
            const play = async () => {
                
                const url = await (await yts(message.content.replace('->audio ', ''))).videos[0].url

                const dispatcher = await ch.play(ytdl(url, {
                    quality: 'highestaudio',
                    highWaterMark: 1 << 25
                }))
                
                song.current = url;
                song.dispatcher = dispatcher;
    dispatcher.on('finish', () =>{
        play()
        const msg = message.channel.messages.cache.get(lodefile)
        msg.edit(new discord.MessageEmbed()
        .setDescription('**🪑Chairman Doughas: Video Ended; Looping...**')
        .setColor('BLUE')
        ).then(m=>{
            setTimeout(() => {
                m.edit(
                    new discord.MessageEmbed().setColor('BLUE')
                    .setDescription('**Video ended, Restarted the video.\n\nPlaying audio...**').setThumbnail('https://cdn.discordapp.com/emojis/845339038131290132.gif?v=1'))
            })
            }, 100)

    }) 
    dispatcher.on('close', (s) => {
        message.channel.messages.cache.get(id).edit(
            embed.setDescription('**Audio Connection Interrupted.\nClosed PipeStream.**').setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fsnicket%2Fimages%2F2%2F2a%2FNetflixvfdeye_square.png%2Frevision%2Flatest%3Fcb%3D20191001152707&f=1&nofb=1')
        )
    })
    dispatcher.on('error', (error) =>{
        message.channel.send(
            new discord.MessageEmbed()
            .setColor('BLUE')
            .setDescription('**The System has ran into an error.\nInformation:**\n\n' + error)
        )
    })   
            }
            try {
                play()
            } catch (e) {
                message.channel.send('Error: ' + e + '\nretrying...')
                play()
            }
            
    } catch (error) {
            console.log(error)
            message.reply('Error: client.voiceChannelError: ' + error)
        
        }   
    })
} )


            }

        })

memlist = 0
client.guilds.cache.forEach(g=>{
    memlist = memlist + g.memberCount
})


client.on('ready', () => {
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var d = new Date("2011-04-20T09:30:51.01");

today = mm + '/' + dd + '/' + yyyy;
    const embed = new discord.MessageEmbed()
    .setAuthor('FWL has Restarted.', client.user.displayAvatarURL())
    .setDescription('__🏓__ `The Bot has started with ` **' +(client.ws.ping + 152)+' Ping**\n__📅__ `At` **'+ today+'**\n\n`[FWL]` **Currently has 5,672 Members registered, 200 of which are in a voice channel, 124 of which are listening to music, who are seperated in 125 Guilds.**')
    .setColor('GREEN')
    const channel = client.channels.cache.get('875067403439063053').send(embed)
})

client.on('message', async message => {
    if (testfwlcmd(message.content)) {
        if (message.content.startsWith('->skip')) {
            message.channel.send(client.user.displayAvatarURL())
            return;
            const split  = message.content.slice('->'.length).trim().split(/ +/);
            if (!split[1]) {
                message.reply('client.VoiceChannel.Audio.SkipTo(): ERR_NO_TIMESTAMP')
            return;
            }
            try {
            var server = await client.voice.connections.get(message.guild.id).voice.channel.join()
            var ytdl = require('ytdl-core')
            server.play(ytdl(song.current, {
                quality: 'highestaudio',
                highWaterMark: 1 << 25,
                range: {start: parseInt(split[1] + "000")} 
            }))  
            message.reply(
                new discord.MessageEmbed()
                .setAuthor("Skipped to: " + parseInt(split[1] + "000 [milisecond]"), 'https://cdn.discordapp.com/emojis/845339038131290132.gif?v=1')
            .setDescription('\n\nSong: ' + song.current)
                .setColor('BLUE')
                )
            }
            catch (e) {
                
                message.channel.send(
                    new discord.MessageEmbed()
                    .setAuthor("Unable to Skip to Timestamp. Invalid Timestamp entry?", 'https://cdn.discordapp.com/emojis/845339038131290132.gif?v=1')
                .setDescription(e + "\n\nUsage: ->skip [1-2500] Measured in **Seconds**!")
                    .setColor('BLUE')
                    )
            }
        }
    }
})






client.on('ready', () => {
    client.user.setStatus('idle')
setInterval(() => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    client.user.setActivity('|-•-| 🏓Ping: ' + client.ws.ping + " | 🚦Version 0.17.5.1 |-•-| |-•-| 💹Uptime: " +numberWithCommas(client.uptime) +"sec | FWTST |-•-|")
}, 3500);
})






class fwlcommand {
    constructor(item) {
        if (typeof item !== "string") throw new SyntaxError('Object "command" must be a type of string.')
console.log(item)

        this.cmd = item;
this.commandMap = new Map()
const { readdirSync } = require('fs'); 
const { join } = require('path'); 
        const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js")); 
        
        for (const file of commandFiles) {
            const command = require(join(__dirname, "commands", `${file}`));
            this.commandMap.set(command.runner, command)
            this.commandMap.set(command.runner + '_filename', file)
        }
        if (!this.commandMap.has(item)) return console.log('This command is not a valid command.')
        
console.log('Attempting to run command: \'' + item + "'...")
    }
    runIndex(arguements, message) {
        console.log('Command Running...')
        const fs = require('fs')
        if (!this.commandMap.has(this.cmd)) return console.log('Not a valid FWL command.')
        const item = this.commandMap.get(this.cmd + '_filename');


            const app = this.commandMap.get(this.cmd).index(client, arguements, message)
            
    
        
    }
    getInfo(arguements, message) {
        const fs = require('fs')
        const item = this.command;
        if (fs.existsSync(`commands/${item}.js`)) {
        return require('./commands/' + item + '.js').information
        }
    }
}


client.on('message', async (message) => {

    if (message.content.startsWith('->')) {
        
        const args = message.content.slice('->'.length).trim().split(/ +/);
        
        try {
            if (waitress.has(message.author.id)) {
const cmap = new Map()
                const { readdirSync } = require('fs'); 
                const { join } = require('path'); 
        const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js")); 
        
        for (const file of commandFiles) {
            const command = require(join(__dirname, "commands", `${file}`));
            cmap.set(command.runner, command)
            cmap.set(command.runner + '_filename', file)
        }
                if (cmap.has(args[0])) {
                const embed = new discord.MessageEmbed().setColor('BLUE').setAuthor('You\'re on cooldown.', etc.icon).setDescription('> `[FWL]` **has detected that you have already sent a command in the last __3 seconds__.**\n> `Your cooldown will end in` __**3** Seconds__.')
           message.reply(embed)
           return;
             } }
             waitress.add(message.author.id)
             setTimeout(() => {
                 waitress.delete(message.author.id)
             }, 700);
            const embed = new discord.MessageEmbed().setColor('BLUE').setAuthor('CommandRunner', etc.icon).setDescription('**Running command** `' +args[0]+'`...')
         message.channel.send(embed).then(m=>{
            setTimeout(() => {
                
                m.edit(embed.setAuthor('CommandRunner', etc.icon).setDescription('__Downloading command from [run.mybutton.org/bot?id=fwl&command=' +args[0]+'/](http://run.mybutton.org)...__'))
            }, 1000);             setTimeout(() => {
                
                m.edit(embed.setAuthor('Running Command...', etc.icon))
            }, 1700);
            setTimeout(() => {

                new fwlcommand(args[0]).runIndex(args, message)  
                m.edit(embed.setAuthor('Command Ran.', etc.icon).setDescription('__Command Info__\n> Command: ' +args[0]+'\n> User: ' +message.author.username+''))
                if (m.deletable) {
                    m.delete({reason: 'fwl.commands.module.deleteTimeout = 4400ms', timeout: '3000'})
                }
                
            }, 2400);
         })

            
        }
        catch (err) {
            const emb = new discord.MessageEmbed().setColor('BLUE').setDescription('__**An unexpected error occured:**__\n\n' + err)
            message.channel.send(emb)
        }
       
    }
    if (message.content.startsWith('http://run.mybutton.org/bot?id=fwl&run=')) {
        
        const args = message.content.slice('http://run.mybutton.org/bot?id=fwl&run='.length).trim().split(/ +/);
        
        try {
            if (waitress.has(message.author.id)) {
const cmap = new Map()
                const { readdirSync } = require('fs'); 
                const { join } = require('path'); 
        const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js")); 
        
        for (const file of commandFiles) {
            const command = require(join(__dirname, "commands", `${file}`));
            cmap.set(command.runner, command)
            cmap.set(command.runner + '_filename', file)
        }
                if (cmap.has(args[0])) {
                const embed = new discord.MessageEmbed().setColor('BLUE').setAuthor('You\'re on cooldown.', etc.icon).setDescription('> `[FWL]` **has detected that you have already sent a command in the last __3 seconds__.**\n> `Your cooldown will end in` __**3** Seconds__.')
           message.reply(embed)
           return;
             } }
             waitress.add(message.author.id)
             setTimeout(() => {
                 waitress.delete(message.author.id)
             }, 3000);
            const embed = new discord.MessageEmbed().setColor('BLUE').setAuthor('CommandRunner', etc.icon).setDescription('**Running command** `' +args[0]+'`...')
         message.channel.send(embed).then(m=>{
            setTimeout(() => {
                
                m.edit(embed.setAuthor('CommandRunner', etc.icon).setDescription('__Downloading command from [run.mybutton.org/bot?id=fwl&command=' +args[0]+'/](http://run.mybutton.org)...__'))
            }, 2400);             setTimeout(() => {
                
                m.edit(embed.setAuthor('Running Command...', etc.icon))
            }, 3400);
            setTimeout(() => {

                new fwlcommand(args[0]).runIndex(args, message)  
                m.edit(embed.setAuthor('Command Ran.', etc.icon).setDescription('__Command Info__\n> Command: ' +args[0]+'\n> User: ' +message.author.username+''))
                if (m.deletable) {
                    m.delete({reason: 'fwl.commands.module.deleteTimeout = 4400ms', timeout: '3000'})
                }
                
            }, 4400);
         })

            
        }
        catch (err) {
            const emb = new discord.MessageEmbed().setColor('BLUE').setDescription('__**An unexpected error occured:**__\n\n' + err)
            message.channel.send(emb)
        }
       
    }
})


client.on('message', message => {
    if (message.content.includes('I AM GOD')) {
        const file = new discord.MessageAttachment('./death.gif')
        message.reply('Not Anymore.')
        message.reply(file)
    }
})
client.login(botToken.getToken)



//TESTING [UNFINISHED_CODE_AREA]

const mb = require('./indexdb/mb.js')
const { SSL_OP_SINGLE_DH_USE } = require('constants')
const ytdl = require('ytdl-core')
const i = new mb.mb()
const embed_test =new i.embed()
embed_test.setText('FWL started successfully. ')
const embed = embed_test.create()


i.log(embed)

client.on('message', message => {
    if (message.content.startsWith('->image')) {
        if (message.content == "->image") return message.reply('Please define "fwl.command.printImage().imageURL" => usage : ->image https://mybutton.org/template.png')
        
        const embed = new discord.MessageEmbed({
            
            color: 'BLUE',
            title: 'TypeWriter.Image({printoutput: "channel.fwl.messageRecieved"})',
            description: 'This image is **32x16**.'
        })
        message.reply(embed)
    }
})