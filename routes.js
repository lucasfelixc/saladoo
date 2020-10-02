const express = require('express')
const route = express.Router()

const landingController = require('./src/controllers/landingPage')

route.get('/', landingController.landing)

module.exports = route