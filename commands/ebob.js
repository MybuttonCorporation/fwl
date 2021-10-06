const discord = require('discord.js')


module.exports = {
    runner: 'gcd',
    index: (client, args, msg) => {
        if (!args[1]) return msg.channel.send('> **Define Number A.**\n> `Usage` **->gcd [10] [50]** ')
        if (!args[2]) return msg.channel.send('> **Define Number B.**\n> `Usage` **->gcd [10] [50]** ')
        var gcd = function(a, b) {
            if (!b) {
              return a;
            }
          
            return gcd(b, a % b);
            
          }
          try {
              const gcdofall = gcd(args[1], args[2])

          const embed = new discord.MessageEmbed().setColor('BLUE').setDescription('**Greates Common Divisor of ' +args[1] + ' **&** ' + args[2] +'** is `' + gcdofall + '`')
        msg.reply(embed)  
        } catch (E) {
              msg.channel.send(E + '\n\nDefine both arguements as numbers. ');
          }
        }
}