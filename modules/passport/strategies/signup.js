var LocalStrategy   = require('passport-local').Strategy
var daoUsers = require('../../../dao/daoUser')

module.exports = function(passport){
	passport.use('signup', new LocalStrategy({
            usernameField:'email',
            passwordField:'password',
            session:false
        },(email, password, done) =>{
            daoUsers.create({
                email:email,
                password:password
            }).then(user=>{
                //enviamos e-mail de confirmación
                done(null,user,{message:'Check your email for validation'})
            }).catch(err=>{
                done(null,false,{message:err.message})
            })
        })
)}
