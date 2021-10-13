import { LOGIN_USER, AUTHENTICATE_TOGGLE } from '../types'

const iState = {
  user: null,
  authenticated: false
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload }
    case AUTHENTICATE_TOGGLE:
      return { ...state, authenticated: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
