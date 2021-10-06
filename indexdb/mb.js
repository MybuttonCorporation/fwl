const chalk = require('chalk')

class mb {
constructor() {

    this.stdcout = (text) => {


        function replaceAll(str, find, replace) {
            return str.replace(new RegExp(find, 'g'), replace);
          }
        const m = text.split("\n").join('\n' +chalk.red('[') + chalk.blue('MB - Log') + chalk.red(']') + chalk.magenta(' -> ') + chalk.reset()) 
console.log(chalk.bold.red('[') + chalk.bold.blue('MB - Log') + chalk.bold.red(']') + chalk.bold.magenta(' ->')+ chalk.bold.blackBright(' ' +m) + chalk.white(' '))
        
    }
    this.stdcout('MB was loaded successfully.')
}
log(text) {
this.stdcout(text);
}

}


mb.prototype.embed = class embed {
    constructor() {
this.text = ""


    }
    setText(text1) {
        this.text = text1;
    }
    create() {
        mbclient.emit('onEmbedCreate', "MB.class.Embed.onCreate().emit(1)")
        return chalk.bold.green("--------------------------\n") + chalk.blue(this.text) + chalk.bold.green("\n--------------------------\n") + chalk.redBright("Embed QQA: MB.classes.EMBED") + chalk.white(' ');

    }
}

const eventEmmiter = require('events')
const mbclient = new eventEmmiter.EventEmitter()

module.exports = {
    mb: mb,
    mbclient: mbclient
}