const passport = require('passport')
const signup = require('./strategies/signup')
const signin = require('./strategies/signin')
const signinGoogle = require('./strategies/signinGoogle')

//registrar las estrategias:
signup(passport)
signin(passport)
signinGoogle(passport)


module.exports=passport
