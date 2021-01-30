// For customized exception handling

// const fs = require('fs')

// fs.readFile('client_credential.txt', function(err, data) {
//     if (err)
//         throw err
//     console.log(data)
// })

// // Event emitter
// process.on('uncaughtException', function() {
//     console.log('Customized Exception')
// })

// Use of domain for exception handling
const fs = require('fs')
const domain = require('domain').create()

// whatever we are doinf we'll bind it in run and will call the callback function
domain.run(function() {
    fs.readFile('client_credential1.txt', function(err, data) {
        if (err)
            throw err
        console.log(data)
    })
})

domain.on("error", function() {
    console.log('Exception')
})