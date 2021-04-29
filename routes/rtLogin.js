const express=require('express')
const rtLogin=express.Router()

rtLogin.get('/ok',(req,res)=>{
    res.json({response:'ok'})
})

rtLogin.get('/error',(req,res)=>{
    res.json({response:'error'})
})

module.exports=rtLogin