//isntanciar passport:
const passport = require('passport')
const signup= require('./strategies/signup')
const signin= require('./strategies/signin')
const signinGoogle= require('./strategies/signinGoogle')

//registro de las diferentes estrategias
signup(passport)
signin(passport)
signinGoogle(passport)

//exporto el módulo completo:
module.exports=passport