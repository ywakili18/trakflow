import Client from './api'

export const GetTickets = async () => {
  try {
    const res = await Client.get('/tickets')
    return res.data
  } catch (error) {
    throw error
  }
}
export const NewTicket = async (newTicket) => {
  try {
    const res = await Client.post('/tickets/createTicket', newTicket)
    return res.data
  } catch (err) {
    throw err
  }
}

export const DeleteTicket = async (ticketId) => {
  try {
    const res = await Client.delete(`/${ticketId}`)
    return res
  } catch (err) {
    throw err
  }
}
