import { GET_TICKETS, NEW_TICKET } from '../types'

const iState = {
  tickets: [],
  newTicket: {
    userId: null,
    ticketContent: ''
  }
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return { ...state, tickets: action.payload }
    case NEW_TICKET:
      return { ...state, newTicket: action.payload }
    default:
      return { ...state }
  }
}

export default PostReducer
