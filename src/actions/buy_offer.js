import Axios from 'axios';
import {buyOfferApi, boughtOffersApi} from '../apiConfig'

export const BUY_OFFER_LOADING = 'BUY_OFFER_LOADING'
export const BUY_OFFER = 'BUY_OFFER'
export const BUY_OFFER_FAILURE = 'BUY_OFFER_FAILURE'
export const BUY_OFFER_SUCCESS = 'BUY_OFFER_SUCCESS'

export const FETCH_BOUGHT_OFFERS_LOADING = 'FETCH_BOUGHT_OFFERS_LOADING'
export const FETCH_BOUGHT_OFFERS = 'FETCH_BOUGHT_OFFERS'
export const FETCH_BOUGHT_OFFERS_SUCCESS = 'FETCH_BOUGHT_OFFERS_SUCCESS'
export const FETCH_BOUGHT_OFFERS_FAILURE = 'FETCH_BOUGHT_OFFERS_FAILURE'

export function buyOfferLoading(){
  return {
    type: BUY_OFFER_LOADING
  }
}

export function buyOffer(id){
  return {
    type: BUY_OFFER,
    payload: Axios.post(buyOfferApi, {offer_id : id})
  }
}

export function buyOfferSuccess(response){
  return {
    type: BUY_OFFER_SUCCESS,
    balance: response.payload.data.balance
  }
}

export function buyOfferFailure(error){
  return {
    type: BUY_OFFER_FAILURE,
    error
  }
}

export function fetchBoughtOffersLoading(){
  return {
    type: FETCH_BOUGHT_OFFERS_LOADING
  }
}

export function fetchBoughtOffers(){
  return {
    type: FETCH_BOUGHT_OFFERS,
    payload: Axios.get(boughtOffersApi)
  }
}

export function fetchBoughtOffersSuccess(response){
  return {
    type: FETCH_BOUGHT_OFFERS_SUCCESS,
    boughtOffers : response.payload.data

  }
}

export function fetchBoughtOffersFailure(error){
  return {
    type: FETCH_BOUGHT_OFFERS_FAILURE,
    error
  }
}
