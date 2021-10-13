import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import UserReducer from './reducers/UserReducer'
import TicketReducer from './reducers/TicketReducer'

const store = createStore(
  combineReducers({
    userState: UserReducer,
    ticketState: TicketReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
