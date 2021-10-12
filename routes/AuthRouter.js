const AppRouter = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

AppRouter.post('/login', controller.Login)
AppRouter.post('/register', controller.Register)
AppRouter.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = AppRouter
