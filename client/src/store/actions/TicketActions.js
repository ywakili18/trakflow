import { GetTickets, NewTicket } from '../../services/Ticketservices'
import { GET_TICKETS, NEW_TICKET } from '../types'

export const LoadTickets = () => {
  return async (dispatch) => {
    try {
      const tickets = await GetTickets()
      dispatch({
        type: GET_TICKETS,
        payload: tickets
      })
    } catch (err) {
      throw err
    }
  }
}

export const CreateTicket = (newTicket) => {
  return async (dispatch) => {
    try {
      const ticket = await NewTicket(newTicket)
      return ticket
    } catch (err) {
      throw err
    }
  }
}

export const NewTicketState = (ticket) => ({
  type: NEW_TICKET,
  payload: ticket
})
