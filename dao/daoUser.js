const db = require('../models/')

let daoUser={}

daoUser.create=(user)=>{
    return new Promise((resolved)=>{
        db.users.create(user).then(data=>resolved(data))
    })
}

daoUser.findAll=()=>{
    return new Promise((resolved)=>{
        db.users.findAll().then(data=>resolved(data))
    })
}

daoUser.findByEmail=(email)=>{
    return new Promise((resolved)=>{
        db.users.findAll({
            where: {
              email: email
            }
          }).then(data=>resolved(data))
    })
}

daoUser.findById=(id)=>{
    return new Promise((resolved)=>{
        db.users.findAll({
            where: {
              id: id
            }
          }).then(data=>resolved(data))
    })
}

daoUser.remove=(id)=>{
    return new Promise((resolved)=>{
        db.users.destroy({
            where: {
                id: id
            }
        }).then(data=>resolved(data))
    })
}
module.exports=daoUser