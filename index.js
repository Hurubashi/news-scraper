const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config({ path: './config/.env' })
const databaseIni = require('./config/databaseIni')

databaseIni()

// Route files
const crawler = require('./routes/crawler')
app.use('/crawler', crawler)

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
