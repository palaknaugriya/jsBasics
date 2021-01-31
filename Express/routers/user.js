const express = require('express')
const router = express.Router()

router.get('/getUser', (req, res) => {
    res.send({
        'name': 'Palak',
        'age': 24
    })
})

module.exports = router