const apiError = require('../error/apiError')

function apiErrorMiddleware(err, req, res, next) {
    if (err instanceof apiError) {
        res.status(err.code).json(err.msg)
        return
    }

    // generic error
    res.statusCode(400).json('Something went wrong')
}

module.exports = apiErrorMiddleware