import {REGISTER_NEW_USER_LOADING, REGISTER_NEW_USER_SUCCESS, REGISTER_NEW_USER_FAILURE, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT, FETCH_USER_SUCCESS} from '../actions/consumer'

const INITIAL_STATE = {
  message: '',
  loading: false,
  isAuthenticated: localStorage.jwtToken,
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
          message: action.message,
          loading: false
        }
    case REGISTER_NEW_USER_FAILURE:
        return {
          ...currentState,
          error: action.error,
          loading: false
        }
    case USER_LOGIN_LOADING:
        return {
          ...currentState,
          loading:true
        }
    case USER_LOGIN_SUCCESS:
        return {
          ...currentState,
          isAuthenticated: true,
          user: action.user,
          loading: false
        }

    case USER_LOGIN_FAILURE:
        return {
          ...currentState,
          loading:false,
          error: action.error
        }
    case USER_LOGOUT:
      return {
        ...currentState,
        isAuthenticated: false,
        user: {}
      }
    case FETCH_USER_SUCCESS:
      return {
        ...currentState,
        user: action.user
      }

    default:
      return currentState
  }
  }
