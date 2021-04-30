const LocalStrategy = require('passport-local').Strategy
const daoUser = require('../../../dao/daoUser')


module.exports= function (passport){
    passport.use('signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },(email,password,done)=>{
        daoUser.create({
            email: email,
            password: password
        }).then(user=>{
            //envio email de confirmación
            done(null,user)
        }).catch(err=>{
            done(err,{mensaje:'hay errores'})
        })
    }))
}