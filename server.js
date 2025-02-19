const express = require('express')
const app = express()
const {greeting} = require('./user')

app.get('/', (req,res) => res.send('This App is running properly!'))
app.get('/ping', (req,res) => res.send('Pong Benss!'))
app.get('/twitter', (req,res) => res.send('Hallo twitter!'))
app.get('/hello/:name', (req,res) => {
    res.json({message:greeting(req.params.name)})
})
module.exports = app
