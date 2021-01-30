const { rejects } = require('assert')
const { resolve } = require('path')
const request = require('request')

const requestFn = () => {
    return new Promise((resolve, reject) => {
        let options = {
            url: 'https://www.google.com',
            method: 'GET'
        }

        request.get(options, (err, res) => {
            if (err) {
                res.send('Err')
            }
        })
    })
}