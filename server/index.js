const path = require('path')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const globalErrorHandler = require('./src/controllers/errorController');
const initRoutes = require('./src/routes')
const connectionDatabase = require('./connection_database')

const app = express()
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUTCH', 'DELETE']
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)
connectionDatabase()
app.use(globalErrorHandler);



const POST = process.env.PORT || 8888
const listener = app.listen(POST, () => {
  console.log('Server is running on the port ' + listener.address().port)
})
