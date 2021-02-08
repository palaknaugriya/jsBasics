const apiError = require('../error/apiError')

class tweetMsg {
    tweet(req, res, next) {
        const { msg } = req.body
        if (!msg) {
            next(apiError.badRequest('Msg field cannot be empty'))
            return
        }
        res.sendStatus(201)
    }
}

module.exports = new tweetMsg()