import dotenv from 'dotenv'
import DBconnect from './db-connect.js'
import express from 'express'
import cors from 'cors'

dotenv.config()
DBconnect()

import Router from './routes/Store.js'

const app = express()

// app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://www.kradfly.com",
        "https://kradfly.com"
    ],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.use(express.json())

app.use("/api",Router)


const port = process.env.PORT || 3100  

app.listen(port,console.log( `Server IS started at http://localhost:${port}`))