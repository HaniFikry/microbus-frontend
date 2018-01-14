import {CREATE_OFFER_LOADING, CREATE_OFFER_SUCCESS, CREATE_OFFER_FAILURE,
        FETCH_VENDOR_OFFERS_LOADING, FETCH_VENDOR_OFFERS_SUCCESS, FETCH_VENDOR_OFFERS_FAILURE,
        FETCH_ALL_OFFERS_LOADING, FETCH_ALL_OFFERS_SUCCESS, FETCH_ALL_OFFERS_FAILURE,
        FETCH_OFFER_DETAILS_LOADING, FETCH_OFFER_DETAILS_SUCCESS, FETCH_OFFER_DETAILS_FAILURE,
        FETCH_TOP_OFFERS_LOADING, FETCH_TOP_OFFERS_SUCCESS, FETCH_TOP_OFFERS_FAILURE,
        FETCH_LATEST_OFFERS_LOADING, FETCH_LATEST_OFFERS_SUCCESS, FETCH_LATEST_OFFERS_FAILURE, CLEAR_SUCCESS_MESSAGE, DELETE_OFFER_ERRORS} from '../actions/offer'
        import {FETCH_BOUGHT_OFFERS_LOADING, FETCH_BOUGHT_OFFERS_SUCCESS, FETCH_BOUGHT_OFFERS_FAILURE} from '../actions/buy_offer'


const INITIAL_STATE = {
  offer: {},
  message: null,
  loading: false,
  offers : [],
  offerDetails: {},
  topOffers: [],
  LatestOffers: [],
  boughtOffers: [],
  offerBuyers: [],
  error: ''
}

export default function(currentState = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_OFFER_LOADING:
      return {
        ...currentState,
        loading: true
      }
    case CREATE_OFFER_SUCCESS:
      return {
        ...currentState,
        loading: false,
        offer: action.offer,
        message: 'Offer created successfully'
      }
    case CREATE_OFFER_FAILURE:
      return {
        ...currentState,
        error: action.error,
        loading: false
      }
    case FETCH_VENDOR_OFFERS_LOADING:
      return {
        ...currentState,
        loading:true
      }
    case FETCH_VENDOR_OFFERS_SUCCESS:
      return {
        ...currentState,
        offers: action.offers,
        loading: false
      }
    case FETCH_VENDOR_OFFERS_FAILURE:
      return {
        ...currentState,
        loading: false,
        error: action.error
      }
    case FETCH_ALL_OFFERS_LOADING:
      return {
        ...currentState,
        loading:true
      }
    case FETCH_ALL_OFFERS_SUCCESS:
      return {
        ...currentState,
        offers: action.offers,
        loading: false
      }
    case FETCH_ALL_OFFERS_FAILURE:
      return {
        ...currentState,
        loading: false,
        error: action.error
      }
    case FETCH_OFFER_DETAILS_LOADING:
      return {
        ...currentState,
        loading: true
      }
    case FETCH_OFFER_DETAILS_SUCCESS:
      return {
        ...currentState,
        loading: false,
        offerDetails: action.offer,
        offerBuyers: action.offer.consumers
      }
    case FETCH_OFFER_DETAILS_FAILURE:
      return {
        ...currentState,
        loading: false,
        error: action.error
      }
    case FETCH_TOP_OFFERS_LOADING:
      return {
        ...currentState,
        loading:true
      }
    case FETCH_TOP_OFFERS_SUCCESS:
      return {
        ...currentState,
        topOffers: action.offers,
        loading: false
      }
    case FETCH_TOP_OFFERS_FAILURE:
      return {
        ...currentState,
        loading: false,
        error: action.error
      }

    case FETCH_LATEST_OFFERS_LOADING:
    return {
      ...currentState,
      loading:true
    }

    case FETCH_BOUGHT_OFFERS_LOADING:
      return {
        ...currentState,
        loading:true
      }
    case FETCH_LATEST_OFFERS_SUCCESS:
      return {
        ...currentState,
        LatestOffers: action.offers,
        loading: false
      }
    case FETCH_LATEST_OFFERS_FAILURE:
    return {
      ...currentState,
      loading: false,
      error: action.error
    }

    case FETCH_BOUGHT_OFFERS_SUCCESS:
      return {
        ...currentState,
        boughtOffers: action.boughtOffers,
        loading: false
      }
    case FETCH_BOUGHT_OFFERS_FAILURE:
      return {
        ...currentState,
        loading: false,
        error: action.error
      }
    case CLEAR_SUCCESS_MESSAGE:
      return {
        ...currentState,
        message: null
      }
    case DELETE_OFFER_ERRORS:
      return {
        ...currentState,
        error: null
      }



      default:
        return currentState
}
}
