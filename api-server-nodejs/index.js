const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUTCH', 'DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const POST = process.env.PORT || 8888
const listener = app.listen(POST, () => {
  console.log('Server is running on the port ' + listener.address().port)
})
