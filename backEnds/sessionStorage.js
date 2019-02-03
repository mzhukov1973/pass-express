module.exports = which='postgres'=>require('sessionStoragePostgres.js')((which.substring(0,8)!=='postgres')?undefined:(which==='postgres-native'?'native':'pg'))
