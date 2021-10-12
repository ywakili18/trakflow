const AppRouter = require('express').Router()
const controller = require('../controllers/UserController')

AppRouter.get('/', controller.GetProfiles)
AppRouter.post('/new_user', controller.CreateUser)
AppRouter.get('/:userId', controller.GetUserProfile)

module.exports = AppRouter
