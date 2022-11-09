
const express = require("express");
const contApp = require("./src/controllers/controller")
//const modApp = require('./src/models/model')
const route = require('./src/routes/route')
const indexServer = require('./src/index')

const app = express();


app.use('/route', indexServer)