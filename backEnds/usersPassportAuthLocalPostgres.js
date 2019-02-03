const Promise = require('bluebird')
const pgPromiseInitOptions = {
  pgFormatting: false,
  pgNative:     true,
  promiseLib:   Promise,
  noLocking:    false,
  capSQL:       false,
  noWarnings:   false,
  connect(client,dc,useCount) {console.log('Connected to database: ', client.connectionParameters.database)},
  disconnect(client,dc,useCount) {console.log('Disconnecting from database: ', client.connectionParameters.database)}
}
const db_connection = {
  host:     process.env.PGHOST,
  port:     process.env.PGPORT,
  database: process.env.PGDATABASE,
  user:     process.env.PGUSER,
  password: process.env.PGPASSWORD
}
let pgPromise, db

const findByIdInternal = (id,doneCallBack) => {
  setImmediate(async () => {
    db.task('find-user-by-id', async t => await t.manyOrNone('SELECT * FROM users_one WHERE id = \''+id+'\''))
      .then(user => doneCallBack(null, user.length?user[0]:null))
      .catch(error => doneCallBack(error, null))
  })
}

const findByUsernameInternal = (username,doneCallBack) => {
  setImmediate(async () => {
    db.task('find-user-by-id', async t => await t.manyOrNone('SELECT * FROM users_one WHERE username = \''+username+'\''))
      .then(user => {
        if (user.length>0) { user[0]['displayName']=user[0].displayname; if (typeof user[0].emails[0]==='string') {user[0].emails.forEach((el,idx,arr)=>arr[idx]={value:el})} return doneCallBack(null, user[0]); }
        return doneCallBack(null, null)
      })
      .catch(error => doneCallBack(error, null))
  })
}

module.exports = driver='pg' => {
  let toExport = {}
  pgPromiseInitOptions.pgNative = driver==='native' ? true : false
  pgPromise                     = require('pg-promise')(pgPromiseInitOptions)
  db                            = pgPromise(db_connection)
  toExport.findById       = findByIdInternal
  toExport.findByUsername = findByUsernameInternal
  return toExport
}
