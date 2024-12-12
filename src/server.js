// import package yang dibutuhkan
const express = require('express')
const cors = require("cors")
const env = require("dotenv")
const db = require("./conn")
const guest_routes = require('./features/guest/routes')

// jalankan config env
env.config()

const app = express()
const PORT = process.env.PORT

// default middleWare
app.use(cors())
app.use(express.json({
    limit : "100mb"
}))
app.use(express.urlencoded({
    extended : true
}))

// routes
app.use(guest_routes)

app.listen(PORT, ()=>{
    console.info(`
    ==================================================
    SERVER BACKEND GUEST APP RUNNING ON LOCALHOST:${PORT}
    ==================================================
    `)
})