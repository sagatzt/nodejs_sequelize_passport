const GoogleStrategy = require('passport-google-oauth20').Strategy
const daoUser=require('../../../dao/daoUser')

module.exports=function(passport){
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8081/login/google/callback"
      },(accessToken, refreshToken, profile, done) =>{
        console.log(profile)
        if(profile){
            daoUser.create(profile)
                .then(user=>{
                    done(null,user)
                })
        }
        
    }))
}