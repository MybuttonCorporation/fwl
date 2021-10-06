const discord = require('discord.js')
'INTEREYSTING diyoruz'
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXh0IjoiZGVjb2RsYXlhbmEgYmlya2HDpyBsYWbEsW0gdmFyLiBiaXJpbmNpc2kgT1JPU1BVIEVWTEFESSBTRU7EsCBQxLDDhywgaWtpbmNpc2ksIHRlYnJpa2xlciBoYXlhdMSxbsSxbiBlbiBnZXJpemVrYWzEsWNhIMWfZXlpbmkgZGVuZWRpbiwgw7zDp8O8bmPDvHPDvCBCZW4gQXpyYSd5YSBhxZ_EscSfxLFtLiIsImNyZWF0b3IiOiJGYXJld2VsbE5laGlyIn0.oPZzyBTKVzRBhzQ-gT_uAVu12X48dpz5P05DUlBNFT4'
module.exports = {
    runner: 'write-embed',
    index: (client, args, message) => {
        const m = require('../FWLToken').decrypt(args[1])
        if (!args[1]) message.reply('> **Please input embed token.**\n `->write-embed completelyValidEmbedToken.youCanTrustMe.DontworryAboutIt`')
        const embed = new discord.MessageEmbed()
        .setDescription('> [`@' +m.creator+ '`](' +message.url+ ')\n' +m.text+ '\n\nBy using [`[FWL]`](https://www.mybutton.org/coffee-projects), you agree to the [`[Mybutton Terms of Service]`](http://run.mybutton.org/tos).')
        .setColor('BLUE')
        message.reply(embed)
    }
    
}