class apiError {
    constructor(code, msg) {
        this.msg = msg
        this.code = code
    }

    static badRequest(msg) {
        return new apiError(400, msg)
    }

    static internalServerError(msg) {
        return new apiError(500, msg)
    }
}

module.exports = apiError