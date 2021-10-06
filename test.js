const axios = require('axios')
async function getGuildPrefix () {
let {data: results} = await axios.get('http://run.mybutton.org/api/875067403439063050_prefix.html')
const f = require('prefix.js') 
if (f != results.prefix) {
    return {
    prefix: f,
    madeFrom: 'mod'
    }
}
}
