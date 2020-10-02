const express = require('express')
const app = express()
const route = require('./routes')
const path = require('path')

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: app,
    noCache: true
})

app
.use(express.static(path.join(__dirname, 'public')))

.use(route)

.listen(5000, () => {
    console.log('Server running http://localhost:5000')
})