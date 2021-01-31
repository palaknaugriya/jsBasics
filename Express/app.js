const express = require('express')
const app = express()
const port = 3000
const userRouter = require('./routers/user')
const dynamicRouter = require('./routers/dynamicUrl')

app.use(userRouter)
app.use(dynamicRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})