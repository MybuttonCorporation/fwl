
const emitter = require('events')
const ee = emitter.EventEmitter
class client {
constructor(type) {
    if (typeof type != "string") throw new SyntaxError('Error: "type" must be typeof string.s')
    if (type == "info" || type == "client") this.clienttype = type;
     throw new SyntaxError('the class "client" must be used like:\nconst <new_mb_client> = new <mbclient>("client") OR const <new_mb_client> = new <mbclient>("data")')
}
run() {
    if (this.clienttype == "info") {
        return {
            version: "mb.js.client1.1.2",
            developer_mode: false,
            mybutton: {
                appID: "1aB53qHnZ74j9z",
                appN: "mb.js.client",
                appCA: "19/8/21",
            },
            instructor: "@see #mb.js"
                    }
    } else if (this.clienttype == "client") {
return new new ee()
    }
}    

}


var eventmb = {
    help: () => {
        const mb = require('./mb.js')
        const i = new mb.mb()
        i.log('run("help", {reason: "client.calledHelp"})s')
        const embed = new i.embed()
        function addstr(str) {
            embed.setText(embed.text + "\n" + str)

        }
        addstr('<mybutton> => https://mybutton.org/')
        addstr('HOWTOUSE.GETINFO:\nmbclient.getInformation("<item>")')
    }
}

module.exports = {
    cli: client,
    use: eventmb
};