const expressSession  = require('express-session')
const sessionSecret   = 'keyboard cat' /* store session state in browser cookie         */
const globSessOptions = {
  name: 'connect.sid',
  cookie: {path:'/', httpOnly:true, secure:false, maxAge:30*24*60*60*1000},
  resave: false,
  saveUninitialized: false,
  secret: sessionSecret
}
const useExpressSessionStore     = () => expressSession(globSessOptions)
const usePgSessionStore          = () => expressSession(Object.assign({},globSessOptions,{store:new (require('connect-pg-simple')(expressSession))({pgPromise:require('./backEnds/sessionStorage')(passportStratLocalBackEnd).db, tableName:'sessions'})}))
const useSQLite3SessionStore     = () => expressSession(Object.assign({},globSessOptions,{store:new (require('connect-sqlite3')(expressSession))({table:'sessions', db:'sessionStoreSQLite3.db'})}))
const useMemorystoreSessionStore = () => expressSession(Object.assign({},globSessOptions,{store:new (require('memorystore')(expressSession))({checkPeriod:24*60*60*1000, max:20})}))

const sessionObjectToUse = sessionStore => {
  if (sessionStore==='express')           { return useExpressSessionStore()     }
  if (sessionStore==='connect-pg-simple') { return usePgSessionStore()          }
  if (sessionStore==='connect-sqlite3')   { return useSQLite3SessionStore()     }
  if (sessionStore==='memorystore')       { return useMemorystoreSessionStore() }
}

module.exports = (sessionStore='express', passportStratLocalBackEnd='postgres') => {
  return sessionObjectToUse(sessionStore) /* Export initialised expressSession instance to be used in the app. */
}
