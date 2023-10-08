const AppError = require('../utils/appError')
const userRouter = require('./userRoutes')
const roleRoute = require('./roleRoutes')


const initRoutes = (app) => {
  app.use('/api/v1/users', userRouter)
  app.use('/api/v1/roles', roleRoute)
  // app.all('*', (req, res, next) => {
  //   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  // });
  return app.use('/', (req, res) => {
    res.send('server on...')

  })
}

module.exports = initRoutes