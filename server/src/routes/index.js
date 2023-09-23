
const userRouter = require('./userRoutes')

const initRoutes = (app) => {
  app.use('/api/v1/users', userRouter)

  return app.use('/', (req, res) => {
    res.send('server on...')

  })
}

module.exports = initRoutes