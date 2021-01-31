const express = require('express')
const router = express.Router()

router.get('/getUser/:id', (req, res) => {
    res.send({
        'id': req.params.id,
        'age': 24
    })
})

// wildcart route
router.get('*', (req, res) => {
    res.status(404).send({ 'message': 'Route not found.' })
})

module.exports = router