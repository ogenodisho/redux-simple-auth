import {
  AUTHENTICATE_FAILED,
  AUTHENTICATE_SUCCEEDED,
  INVALIDATE_SESSION
} from './actionTypes'
const defaultState = {
  isAuthenticated: false,
  data: {}
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTHENTICATE_SUCCEEDED:
      return { ...state, isAuthenticated: true, data: action.payload }
    case AUTHENTICATE_FAILED:
    case INVALIDATE_SESSION:
      return { ...state, isAuthenticated: false, data: {}}
    default:
      return state
  }
}

export default reducer
