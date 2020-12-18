const express = require ('express')
const app = express()
const cors = require ('cors')
const router = require ('./routes')
const port = 3005

app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port , () => {
    console.log(`IP GATEWAY CONNECTED`)
})