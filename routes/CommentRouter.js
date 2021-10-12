const AppRouter = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

AppRouter.get('/', controller.GetComments)
AppRouter.get(
  '/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetCommentById
)

AppRouter.post(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)
AppRouter.delete(
  '/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)
AppRouter.put(
  '/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCommentById
)

module.exports = AppRouter
