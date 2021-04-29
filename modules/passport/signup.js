var LocalStrategy   = require('passport-local').Strategy
var daoUsers = require('../../dao/daoUser')

module.exports = function(passport){
	passport.use('signup', new LocalStrategy({
            usernameField:'email',
            passwordField:'password',
            session:false,
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },(req, email, password, done) =>{
            daoUsers.create(req.body)
                .then(data=>{
                    //enviamos e-mail de confirmación
                    done(null,data,{message:'Check your email for validation'})
                }).catch(err=>done(null,false,{message:err.message}))
        })
    )
}