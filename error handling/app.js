const express = require('express')
const tweetRouter = require('./routers/tweetRouter')
const apiErrorMiddleware = require('./error/errorMiddleware')
const app = express()


app.use(express.json(), tweetRouter, apiErrorMiddleware)

app.listen(8081, () => console.log(`App is runting on port 8081`))