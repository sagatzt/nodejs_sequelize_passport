const passport = require('passport')
const signup = require('./strategies/signup')

passport.initialize()
passport.session()

passport.serializeUser(function(user, done) {
    console.log('serializing user: ',user)
    done(null, user.id)
})

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        console.log('deserializing user:',user)
        done(err, user)
    })
})

signup(passport)