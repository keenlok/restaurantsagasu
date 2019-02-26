const express = require('express')
const http = require('http')
const path = require('path')

const app = express()
http.createServer(app)

app.use('/static', express.static('./public'))

