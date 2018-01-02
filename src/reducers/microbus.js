
import {REGISTER_NEW_USER_LOADING, REGISTER_NEW_USER_SUCCESS, REGISTER_NEW_USER_FAILURE, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT, FETCH_USER_SUCCESS, FETCH_WISHLIST_LOADING, FETCH_WISHLIST_SUCCESS, FETCH_WISHLIST_FAILURE, ADD_ITEM_TO_WISHLIST_LOADING, ADD_ITEM_TO_WISHLIST_SUCCESS, ADD_ITEM_TO_WISHLIST_FAILURE, CREATE_WISHLIST_ITEM_LOADING, CREATE_WISHLIST_ITEM_SUCCESS, CREATE_WISHLIST_ITEM_FAILURE, DELETE_WISHLIST_ITEM_LOADING, DELETE_WISHLIST_ITEM_SUCCESS, DELETE_WISHLIST_ITEM_FAILURE} from '../actions/consumer'


const INITIAL_STATE = {
  message: '',
  loading: false,
  user: {},
  wishlist: [],
  error: null,
  user: {}
}

export default function(currentState = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_NEW_USER_LOADING:
        return {
          ...currentState,
          loading: true
        }
        // break;
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
        wishlist: [],
        user: {}
      }
    case FETCH_USER_SUCCESS:
      return {
        ...currentState,
        user: action.user
      }

    case FETCH_WISHLIST_LOADING:
      return{
      ...currentState,
      loading:true
    }

    case FETCH_WISHLIST_SUCCESS:
      return {
        ...currentState,
        wishlist: action.wishlist,
        loading: false
      }

      case FETCH_WISHLIST_FAILURE:
      return {
        ...currentState,
        loading: false,
        error: action.error
      }
      case ADD_ITEM_TO_WISHLIST_LOADING:
      return {
        ...currentState,
        loading: true
      }
      case ADD_ITEM_TO_WISHLIST_SUCCESS:
      return {
        ...currentState,
        wishlist : [
        ...currentState.wishlist,
        action.item ],
        loading: false

      }
      case ADD_ITEM_TO_WISHLIST_FAILURE:
      return {
        ...currentState,
        loading: false,
        error: action.error
      }
      case CREATE_WISHLIST_ITEM_LOADING:
      return {
        ...currentState,
        loading: true
      }
      case CREATE_WISHLIST_ITEM_SUCCESS:
      return {
        ...currentState,
        wishlist : [
        ...currentState.wishlist,
        action.item ],
        loading: false

      }
      case CREATE_WISHLIST_ITEM_FAILURE:
      return {
        ...currentState,
        loading: false,
        error: action.error
      }
      case DELETE_WISHLIST_ITEM_LOADING:
      var newWishlist = currentState.wishlist.map(item => {
      if (item.id == action.id) item.loading = true;
      return item;
      })
      return {...currentState, wishlist: newWishlist}

      case DELETE_WISHLIST_ITEM_SUCCESS:
      var newWishlist = currentState.wishlist.filter(item => {
      return item.id !== action.id
      })
      return {...currentState, wishlist: newWishlist}

      case DELETE_WISHLIST_ITEM_FAILURE:
      var newWishlist = currentState.wishlist.map(item => {
      if (item.id == action.id) {item.loading = false; item.error = action.error}
      return item;
      })
      return {...currentState, wishlist: newWishlist}
    default:
      return currentState

  }
}
