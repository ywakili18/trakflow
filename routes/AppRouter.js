const AppRouter = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const TicketRouter = require('./TicketRouter')
const CommentRouter = require('./CommentRouter')

AppRouter.use('/auth', AuthRouter)
AppRouter.use('/users', UserRouter)
AppRouter.use('/tickets', TicketRouter)
AppRouter.use('/comments', CommentRouter)

module.exports = AppRouter
