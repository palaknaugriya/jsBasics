// export a module/ const
module.export = functionNmae

// Set up express server
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(port)
})

//use express to hit another api
const request = require('request')
var options = {
    url: '',
    type: GET,
    header
}
request(options, function(res, req, body) {
    console(res)
})