import {REGISTER_NEW_VENDOR_LOADING, REGISTER_NEW_VENDOR_SUCCESS, REGISTER_NEW_VENDOR_FAILURE, VENDOR_LOGIN_LOADING, VENDOR_LOGIN_SUCCESS, VENDOR_LOGIN_FAILURE, VENDOR_LOGOUT, FETCH_PRODUCTLIST_LOADING, FETCH_PRODUCTLIST_SUCCESS, FETCH_PRODUCTLIST_FAILURE, ADD_ITEM_TO_PRODUCTLIST_LOADING, ADD_ITEM_TO_PRODUCTLIST_SUCCESS, ADD_ITEM_TO_PRODUCTLIST_FAILURE, CREATE_PRODUCTLIST_ITEM_LOADING, CREATE_PRODUCTLIST_ITEM_SUCCESS, CREATE_PRODUCTLIST_ITEM_FAILURE, DELETE_PRODUCTLIST_ITEM_LOADING, DELETE_PRODUCTLIST_ITEM_SUCCESS, FETCH_VENDOR_SUCCESS, DELETE_PRODUCTLIST_ITEM_FAILURE, FETCH_PRODUCT_LOADING, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, UPDATE_VENDOR_BALANCE_SUCCESS, CLEAR_VENDOR_MESSAGES} from '../actions/vendor'

const INITIAL_STATE = {
  message: '',
  error: null,
  loading: false,
  user: {},
  product_list: [],
  singleProduct: {}
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
          message: "Vendor registered successfully, you will be redirected shortly",
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
        user: {}
      }

      case FETCH_VENDOR_SUCCESS:
        return {
          ...currentState,
          user: action.user
        }
      case FETCH_PRODUCTLIST_LOADING:
        return{
        ...currentState,
        loading:true
      }

      case FETCH_PRODUCTLIST_SUCCESS:
        return {
          ...currentState,
          product_list: action.product_list,
          loading: false
        }

        case FETCH_PRODUCTLIST_FAILURE:
        return {
          ...currentState,
          loading: false,
          error: action.error
        }
        case ADD_ITEM_TO_PRODUCTLIST_LOADING:
        return {
          ...currentState,
          loading: true
        }
        case ADD_ITEM_TO_PRODUCTLIST_SUCCESS:
        return {
          ...currentState,
          product_list : [
          ...currentState.product_list,
          action.item ],
          loading: false

        }
        case ADD_ITEM_TO_PRODUCTLIST_FAILURE:
        return {
          ...currentState,
          loading: false,
          error: action.error
        }
        case CREATE_PRODUCTLIST_ITEM_LOADING:
        return {
          ...currentState,
          loading: true
        }
        case CREATE_PRODUCTLIST_ITEM_SUCCESS:
        return {
          ...currentState,
          product_list : [
          ...currentState.product_list,
          action.item ],
          loading: false

        }
        case CREATE_PRODUCTLIST_ITEM_FAILURE:
        return {
          ...currentState,
          loading: false,
          error: action.error
        }
        case DELETE_PRODUCTLIST_ITEM_LOADING:
        var newproduct_list = currentState.product_list.map(item => {
        if (item.id === action.id) item.loading = true;
        return item;
        })
        return {...currentState, product_list: newproduct_list}

        case DELETE_PRODUCTLIST_ITEM_SUCCESS:
        newproduct_list = currentState.product_list.filter(item => {
        return item.id !== action.id
        })
        return {...currentState, product_list: newproduct_list}

        case DELETE_PRODUCTLIST_ITEM_FAILURE:
        newproduct_list = currentState.product_list.map(item => {
        if (item.id === action.id) {item.loading = false; item.error = action.error}
        return item;
        })
        return {...currentState, product_list: newproduct_list}

        case FETCH_PRODUCT_LOADING:
        return {
          ...currentState,
          loading: true
        }

        case FETCH_PRODUCT_SUCCESS:
        return {
          ...currentState,
          loading: false,
          singleProduct: action.item
        }
        case FETCH_PRODUCT_FAILURE:
        return {
          ...currentState,
          loading: false,
          error: action.error
        }
        case UPDATE_VENDOR_BALANCE_SUCCESS:
        return {
          ...currentState,
          user: {...currentState.user,
            user_balance: action.amount
          },
          loading: false
        }
        case CLEAR_VENDOR_MESSAGES:
        return {
          ...currentState,
          message: null,
          error: null
        }

    default:
      return currentState
  }
  }
