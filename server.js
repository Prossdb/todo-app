//declare variables
const express = require('express')
const app = express()
const PORT = 8500;
const mongoose = require('mongoose')
require('dotenv').config()
// add model varriable

// set midlleware
app.set('view engine','ejs' )
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_CONNECTION,
{usenewUrlParser: true},
() => {console.log('Connected to db!')}
)

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))


