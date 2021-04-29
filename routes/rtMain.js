const express = require('express')
const rtMain = express.Router()
const daoUser=require('../dao/daoUser')
//aqui te creas las rutas get, post, etc.. que necesies

rtMain.get('/', function (req, res) {
    res.json({response:'ok'})
})


module.exports=rtMain