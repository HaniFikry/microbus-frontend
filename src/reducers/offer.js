import {CREATE_OFFER_LOADING, CREATE_OFFER_SUCCESS, CREATE_OFFER_FAILURE,
        FETCH_VENDOR_OFFERS_LOADING, FETCH_VENDOR_OFFERS_SUCCESS, FETCH_VENDOR_OFFERS_FAILURE,
        FETCH_ALL_OFFERS_LOADING, FETCH_ALL_OFFERS_SUCCESS, FETCH_ALL_OFFERS_FAILURE,
        FETCH_OFFER_DETAILS_LOADING, FETCH_OFFER_DETAILS, FETCH_OFFER_DETAILS_SUCCESS, FETCH_OFFER_DETAILS_FAILURE,
        FETCH_TOP_OFFERS_LOADING, FETCH_TOP_OFFERS, FETCH_TOP_OFFERS_SUCCESS, FETCH_TOP_OFFERS_FAILURE} from '../actions/offer'

const INITIAL_STATE = {
  offer: {},
  error: null,
  loading: false,
  offers : [],
  offerDetails: {},
  topOffers: []
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
        offer: action.offer
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
        offerDetails: action.offer
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



      default:
        return currentState
}
}
