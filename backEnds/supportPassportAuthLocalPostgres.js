const PgAsync = require('pg-async').default

const findByIdInternal = (id,doneCallBack,driver='pg') => {
  setImmediate(async () => {
    const pgAsync = new PgAsync({user:'postgres', host:'/run/postgresql', database:'node_passport_db'}, (driver==='pg'?'pg':'native'))
    try {
      const user = await pgAsync.rows('SELECT * FROM users_one WHERE id = \''+id+'\';')
      pgAsync.closeConnections()
      if (Object.entries(user).length>0) {
        if (typeof user[0].emails[0]==='string') {user[0].emails.forEach((el,idx,arr)=>arr[idx]={value:el})}
        user[0]['displayName']=user[0].displayname
        return doneCallBack(null, user[0])
      }
      return doneCallBack(null, null)
    } catch(err) {
      return doneCallBack(err, null)
    }
  })
}
const findByUsernameInternal = (username,doneCallBack,driver='pg') => {
  setImmediate(async () => {
    const pgAsync = new PgAsync({user:'postgres', host:'/run/postgresql', database:'node_passport_db'}, (driver==='pg'?'pg':'native'))
    try {
      const user = await pgAsync.rows('SELECT * FROM users_one WHERE username = \''+username+'\';')
      pgAsync.closeConnections()
      if (Object.entries(user).length>0) {
        if (typeof user[0].emails[0]==='string') {user[0].emails.forEach((el,idx,arr)=>arr[idx]={value:el})}
        user[0]['displayName']=user[0].displayname
        return doneCallBack(null, user[0])
      }
      return doneCallBack(null, null)
    } catch(err) {
      return doneCallBack(err, null)
    }
  })
}

module.exports = driver='pg' => {
  let toExport = {}
  if (driver==='native') {
    toExport.findById       = (id,doneCallBack) => findByIdInternal(id,doneCallBack,'native')
    toExport.findByUsername = (username,doneCallBack) => findByUsernameInternal(username,doneCallBack,'native')
  } else {
    toExport.findById       = (id,doneCallBack) => findByIdInternal(id,doneCallBack,'pg')
    toExport.findByUsername = (username,doneCallBack) => findByUsernameInternal(username,doneCallBack,'pg')
  }
  return toExport
}
