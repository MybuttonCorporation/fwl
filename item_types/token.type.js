/**
 * @generator 
 * - **Creates a safe Discord.js Log-In Token**
 * - `const tokentype = require('token.type.js') //define mybutton.token()`
 * - `var discordJSToken = new tokentype("definetely valid token")`
 * - `client.login(discordJSToken.getToken  //required. getToken hides this value from leaks.)`
 * - **if used** `[Gateaway perspective]: NEW botlogin. bot.info: {token: discordJSToken.getToken}`
 * - **if not used** `[Gateaway perspective]: NEW botlogin. bot.info: {token: definetely valid token}`
 * - This will not mess with discord bots' login.
 */

class index {
    constructor(tokenName) {
        this.token = tokenName;
    }
    get getToken() {
        return this.token;
    }
}

module.exports = index