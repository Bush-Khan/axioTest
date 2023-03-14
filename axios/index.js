const express = require('express')
const bodyParser = require('body-parser')
const knex = require("./connection/knex")
const router = require('./route/route')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',router)

port = 3000||(process.env.PORT)
app.listen(port,function(){
    console.log(`Port is running on ${port}`)
})