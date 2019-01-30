const supportPassportAuthLocal = {}
const supportPassportAuthLocal['local']           = require('supportPassportAuthLocalLocal.js')
const supportPassportAuthLocal['postgres-js']     = require('supportPassportAuthLocalPostgres.js')('pg')
const supportPassportAuthLocal['postgres-native'] = require('supportPassportAuthLocalPostgres.js')('native')
const supportPassportAuthLocal['postgres']        = supportPassportAuthLocal['postgres-js']
const supportPassportAuthLocal['sqlite3']         = require('supportPassportAuthLocalSqlite3.js')

const findById       = (which='local', id, doneCallBack)       => supportPassportAuthLocal[which].findById(id, doneCallBack)
const findByUsername = (which='local', username, doneCallBack) => supportPassportAuthLocal[which].findByUsername(id, doneCallBack)

module.exports.findById
module.exports.findByUsername
