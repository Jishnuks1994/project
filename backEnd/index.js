const express=require('express')
const cors=require('cors')
require('dotenv').config()


const router = require('./route/route')

require('./database/db')


const server=express()

server.use(cors())
server.use(express.json())
server.use(router)

const port=5000 || process.env.port

server.listen(port,()=>{
    console.log(`______server started at port number ${port}_________`);
})
