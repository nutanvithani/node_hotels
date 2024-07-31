const express = require('express')
const app =express()
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

require("dotenv").config()
let port = process.env.PORT ||8090

app.get('/',(req,res)=>{
    res.send('Hello World')
})

const personRoutes=require('./routes/personRoutes')
const MenuItemRoutes = require('./routes/menuRoutes')
app.use('/person',personRoutes)
app.use('/menu',MenuItemRoutes)


app.listen(port,()=>{
    console.log('Server is running on port 8090')
})