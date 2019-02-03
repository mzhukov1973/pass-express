module.exports = (passportStratLocalBackEnd='postgres') => {
  if (passportStratLocalBackEndcase=='local')                   { return require('usersPassportAuthLocalLocal.js')                                                                    }
  if (passportStratLocalBackEndcase=='sqlite3')                 { return require('usersPassportAuthLocalSqlite3.js')                                                                  }
  if (passportStratLocalBackEndcase.substring(0,8)=='postgres') { return require('usersPassportAuthLocalPostgres.js')(passportStratLocalBackEndcase=='postgres-native'?'native':'pg') }
}
