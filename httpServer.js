const http = require('http')
const port = 3000

http.createServer((req, res) => {
    console.log('Server is up at port ' + port)
    res.write('Hi!') //write a respose to the client
    res.end() //end the response
}).listen(port)