const express = require('express')
const router = express.Router()
const tweetMsg = require('../controller/tweetMsg')

router.post('/tweet', tweetMsg.tweet)

module.exports = router