const express = require('express')
const app = express()
const hero = require('./router/hero')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

var db = mongoose.connect('mongodb://localhost:27017/myhero')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',hero)

app.listen(3000,() => {
	console.log('app listening on port 3000')
})