import {REGISTER_NEW_VENDOR_LOADING, REGISTER_NEW_VENDOR_SUCCESS, REGISTER_NEW_VENDOR_FAILURE, VENDOR_LOGIN_LOADING, VENDOR_LOGIN_SUCCESS, VENDOR_LOGIN_FAILURE, VENDOR_LOGOUT, FETCH_VENDOR_SUCCESS} from '../actions/vendor'

const INITIAL_STATE = {
  message: '',
  loading: false,
  isAuthenticated: localStorage.jwtToken,
  user: {}
}

export default function(currentState = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_NEW_VENDOR_LOADING:
        return {
          ...currentState,
          loading: true
        }
        // break;
    case REGISTER_NEW_VENDOR_SUCCESS:
        return {
          ...currentState,
          message: action.message,
          loading: false
        }
    case REGISTER_NEW_VENDOR_FAILURE:
        return {
          ...currentState,
          error: action.error,
          loading: false
        }
    case VENDOR_LOGIN_LOADING:
        return {
          ...currentState,
          loading:true
        }
    case VENDOR_LOGIN_SUCCESS:
        return {
          ...currentState,
          isAuthenticated: true,
          user: action.user,
          loading: false
        }

    case VENDOR_LOGIN_FAILURE:
        return {
          ...currentState,
          loading:false,
          error: action.error
        }
    case VENDOR_LOGOUT:
      return {
        ...currentState,
        isAuthenticated: false,
        user: {}
      }
    case FETCH_VENDOR_SUCCESS:
      return {
        ...currentState,
        user: action.user
      }

    default:
      return currentState
  }
  }
