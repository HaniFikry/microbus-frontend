import {REGISTER_NEW_USER_LOADING, REGISTER_NEW_USER_SUCCESS, REGISTER_NEW_USER_FAILURE} from '../actions/consumer'

const INITIAL_STATE = {
  message: '',
  loading: false,
  isAuthenticated: false,
  user: {}
}

export default function(currentState = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_NEW_USER_LOADING:
        return {
          ...currentState,
          loading: true
        }
        break;
    case REGISTER_NEW_USER_SUCCESS:
        return {
          ...currentState,
          message: action.message
        }
    case REGISTER_NEW_USER_FAILURE:
        return {
          ...currentState,
          error: action.error
        }


    default:
      return currentState
  }
  }
