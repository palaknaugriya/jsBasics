const express = require('express')
const router = express.Router()

// middleware function -> function that has access to request object and response object,
// as well as the next middleware function in the request-response cycle.
router.use('/getUser', (req, res, next) => {
    console.log('Inside Middleware')
    next()
})

router.get('/getUser', (req, res) => {
    console.log('Inside Router')
    res.send({
        'name': 'Palak',
        'age': 24
    })
})

// wildcart route
router.get('*', (req, res) => {
    res.status(404).send({ 'message': 'Route not found.' })
})

module.exports = router