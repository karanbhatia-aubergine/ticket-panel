// const http = require('http')
// const port =  process.env.PORT || 3000
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('Content-Type','text/html')
//     res.end('<h1>This is my first server</h1> <p>hi hello!</p>')
// })

// server.listen(port, ()=>{
//     console.log(`Serveris listening on port ${port}`)
// })

require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const mongoString  = process.env.DATABASE_URL
const routes = require('./routes/routes')

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error',(error)=>{
    console.log(error)
})

database.once('connected',()=>{
    console.log('Database Connected')
})

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(3000,() => {
    console.log(`Server Started at ${3000}`)
})