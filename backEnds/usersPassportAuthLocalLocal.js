const localStorage = [
  {id:1, username:'jack', password:'secret',   displayName:'Jack', emails:[{values:'jack@example.com'}]},
  {id:2, username:'jill', password:'birthday', displayName:'Jill', emails:[{values:'jill@example.com'}]},
  {id:3, username:'max',  password:'123456',   displayName:'Max',  emails:[{values:'max@example.com'}, {values:'mzhukov31415@gmail.com'}, {values:'mzhukov31415dev@gmail.com'}]}
]

const findById = (id, doneCallBack) => {
  const retArr = localStorage.filter(el=>el.id===id)
  return doneCallBack(null, retArr.length===1?retArr:null)
}
const findByUsername = (username, doneCallBack) => {
  const retArr = localStorage.filter(el=>el.username===username)
  return doneCallBack(null, retArr.length===1?retArr:null)
}

module.exports.findById
module.exports.findByUsername
