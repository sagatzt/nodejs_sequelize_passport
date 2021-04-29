var LocalStrategy   = require('passport-local').Strategy
var daoUsers = require('../../../dao/daoUser')

module.exports = function(passport){
	passport.use('signin', new LocalStrategy({
            usernameField:'email',
            passwordField:'password',
            session:false
        },(email, password, done) =>{
            daoUsers.findByEmail(email)
            .then(user=>{
                if(!user || user.password!=password) 
                    done(null,false,{message:err.message})
                else
                    done(null,user,{message:'Usuario correcto'})
            }).catch(err=>{
                done(null,false,{message:err.message})
            })
        })
)}