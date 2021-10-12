const { User, Ticket, Comment } = require('../models')

const GetTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({
      include: [
        {
          model: Comment,
          as: 'ticketsAndComments',
          include: [
            {
              model: User,
              as: 'commentsAndUsers',
              attributes: ['id', 'userName']
            }
          ]
        }
      ]
    })

    res.send(tickets)
  } catch (error) {
    throw error
  }
}
const CreateTicket = async (req, res) => {
  try {
    console.log(req.params)
    let ticketCreator = parseInt(req.params.userId)
    let ticketBody = {
      ticketCreator,
      ...req.body
    }
    let ticket = await Ticket.create(ticketBody)
    res.send(ticket)
  } catch (error) {
    throw error
  }
}
const GetTicketById = async (req, res) => {
  try {
    let ticketId = req.params.postId
    let ticket = await Ticket.findByPk(ticketId)
    res.send(ticket)
  } catch (error) {
    throw error
  }
}
const UpdateTicketById = async (req, res) => {
  try {
    let updatedTicket = await Ticket.update(req.body, {
      where: { id: req.params.ticketId },
      returning: true
    })
    res.send(updatedTicket)
  } catch (error) {
    throw error
  }
}

const DeleteTicket = async (req, res) => {
  try {
    let ticketId = parseInt(req.params.ticketId)
    await Ticket.destroy({ where: { id: ticketId } })
    res.send({ message: `Deleted ticket with an id of ${ticketId}` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetTickets,
  CreateTicket,
  GetTicketById,
  UpdateTicketById,
  DeleteTicket
}
