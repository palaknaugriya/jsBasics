const express = require('express')
const router = express.Router()

router.get('/getUser', (req, res) => {
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