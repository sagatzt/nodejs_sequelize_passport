const express=require('express')
const rtLogin=express.Router()
const passport=require('../modules/passport')


rtLogin.post('/signup',(req,res)=>{
    passport.authenticate('signup',(err,data,info)=>{
        res.json(data)
    })(req,res)
})

rtLogin.post('/signin',(req,res)=>{
    passport.authenticate('signin',(err,data,info)=>{
        res.json(data)
    })(req,res)
})

/////////GOOGLE//////////////////////
rtLogin.get('/signin-google', 
    passport.authenticate('signin-google',{scope:['profile','email']})
)

rtLogin.get('/google/callback', (req,res)=>{
    passport.authenticate('signin-google',(err,data,info) =>{
      res.json({response: data,info})
    })(req,res)
}) 

module.exports=rtLogin