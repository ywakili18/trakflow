const AppRouter = require('express').Router()
const controller = require('../controllers/TicketController')
const middleware = require('../middleware')

AppRouter.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetTickets
)
AppRouter.get(
  '/:ticketId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetTicketById
)

AppRouter.put(
  '/:ticketId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateTicketById
)

AppRouter.post(
  '/:userId/createTicket',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateTicket
)
AppRouter.delete(
  '/:ticketId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteTicket
)

module.exports = AppRouter
// test
