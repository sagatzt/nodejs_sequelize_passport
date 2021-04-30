var GoogleStrategy = require('passport-google-oauth20').Strategy
var daoUsers = require('../../../dao/daoUser')

module.exports = function (passport) {
    passport.use('signin-google', new GoogleStrategy({
        clientID: '96185964168-mqkvjqo2m9r20aed53c3istd2gijrirk.apps.googleusercontent.com',
        clientSecret: 'GGxadGG9cSU279h2px272Cpn',
        callbackURL: 'http://localhost:8081/login/google/callback'
    }, (accessToken, refreshToken, profile, done)=> {
        console.log(profile)
        done(null,profile,{messaje:'Google authentication OK'})
        /*daoUsers.findByEmail(profile.emails[0].value)
            .then(async data=>{
                //si es nuevo, lo guardamos:
                if(!data){
                    data={
                        username: profile.displayName,
                        firstName: profile.name.givenName,
                        lastName:profile.name.familyName,
                        email: profile.emails[0].value,
                        active: profile.emails[0].verified,
                        provider: profile.provider
                    }
                    await daoUsers.save(data)
                } 
                done(null,data,{token:accessToken})
            }).catch(err=>done(null,false,{message:err.message}))
        */
    }))
}