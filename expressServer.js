const express = require('express')
const app = express()

app.use(function(req, res, next) {
    console.log('Hello')
    next()
})

app.listen(3000)