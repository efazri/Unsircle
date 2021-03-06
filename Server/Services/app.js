const express = require('express')
const app = express()
const cors = require ('cors')
const router = require ('./routes')
const errorHandler = require ('./middleware/errorHandler')
const port = 3000

app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`connected to port ${port}`)
})
