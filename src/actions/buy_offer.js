import Axios from 'axios';

export const BUY_OFFER_LOADING = 'BUY_OFFER_LOADING'
export const BUY_OFFER = 'BUY_OFFER'
export const BUY_OFFER_FAILURE = 'BUY_OFFER_FAILURE'
export const BUY_OFFER_SUCCESS = 'BUY_OFFER_SUCCESS'


export function buyOfferLoading(){
  return {
    type: BUY_OFFER_LOADING
  }
}

export function buyOffer(id){
  return {
    type: BUY_OFFER,
    payload: Axios.post(`http://localhost:3000/offer/buy`, {offer_id : id})
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
