//declare variables
const express = require('express')
const app = express()
const PORT = 8500;
const mongoose = require('mongoose');
const todo = require('./modules/todo');
require('dotenv').config()
const Todo = require('./models/todo')

// set midlleware
app.set('view engine','ejs' )
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_CONNECTION,
{usenewUrlParser: true},
() => {console.log('Connected to db!')}
)

app.get('/', async (req, res) => {
    try {
 Todo.find({}, (err, tasks) => {
    res.render('index, ejs', {todo: task})
})
    } catch (err) {
if (err) return res.status(500).send(err)
    }
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))


