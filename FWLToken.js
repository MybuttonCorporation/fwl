const jwt = require('jsonwebtoken')
var rets = {}
rets.create = function create(used) {
  try {
var ret = jwt.sign(used, "secret", {noTimestamp:true})
  } catch (e) {
    console.log(e);
  }
  return ret

}
rets.decrypt = function decrypt (token) {
  return jwt.decode(token)
};

module.exports = rets

