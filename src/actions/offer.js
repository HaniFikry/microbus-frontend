import Axios from 'axios'

export const CREATE_OFFER_LOADING = 'CREATE_OFFER_LOADING'
export const CREATE_OFFER = 'CREATE_OFFER'
export const CREATE_OFFER_SUCCESS = 'CREATE_OFFER_SUCCESS'
export const CREATE_OFFER_FAILURE = 'CREATE_OFFER_FAILURE'

export const FETCH_VENDOR_OFFERS_LOADING = 'FETCH_VENDOR_OFFERS_LOADING'
export const FETCH_VENDOR_OFFERS = 'FETCH_VENDOR_OFFERS'
export const FETCH_VENDOR_OFFERS_SUCCESS = 'FETCH_VENDOR_OFFERS_SUCCESS'
export const FETCH_VENDOR_OFFERS_FAILURE = 'FETCH_VENDOR_OFFERS_FAILURE'

export const FETCH_ALL_OFFERS_LOADING = 'FETCH_ALL_OFFERS_LOADING'
export const FETCH_ALL_OFFERS = 'FETCH_ALL_OFFERS'
export const FETCH_ALL_OFFERS_SUCCESS = 'FETCH_ALL_OFFERS_SUCCESS'
export const FETCH_ALL_OFFERS_FAILURE = 'FETCH_ALL_OFFERS_FAILURE'

export const FETCH_OFFER_DETAILS_LOADING = 'FETCH_OFFER_DETAILS_LOADING'
export const FETCH_OFFER_DETAILS = 'FETCH_OFFER_DETAILS'
export const FETCH_OFFER_DETAILS_SUCCESS = 'FETCH_OFFER_DETAILS_SUCCESS'
export const FETCH_OFFER_DETAILS_FAILURE = 'FETCH_OFFER_DETAILS_FAILURE'

export function createOfferLoading(){
  return {
    type: CREATE_OFFER_LOADING
  }
}

export function createOffer(offer){
  return {
    type: CREATE_OFFER,
    payload: Axios.post(`http://localhost:3000/offers`, offer )
  }
}

export function createOfferSuccess(response){
  return {
    type: CREATE_OFFER_SUCCESS,
    offer: response.payload.data
  }
}

export function createOfferFailure(error){
  return {
    type: CREATE_OFFER_FAILURE,
    error
  }
}

export function fetchVendorOffersLoading(){
  return {
    type: FETCH_VENDOR_OFFERS_LOADING
  }
}

export function fetchVendorOffers(){
  return {
    type: FETCH_VENDOR_OFFERS,
    payload: Axios.get(`http://localhost:3000/current_vendor_offers.json`)
  }
}

export function fetchVendorOffersSuccess(response){
  return {
    type: FETCH_VENDOR_OFFERS_SUCCESS,
    offers: response.payload.data

  }
}

export function fetchVendorOffersFailure(error){
  return {
    type: FETCH_VENDOR_OFFERS_FAILURE,
    error
  }
}

export function fetchAllOffersLoading(){
  return {
    type: FETCH_ALL_OFFERS_LOADING
  }
}

export function fetchAllOffers(){
  return {
    type: FETCH_ALL_OFFERS,
    payload: Axios.get(`http://localhost:3000/offers.json`)
  }
}

export function fetchAllOffersSuccess(response){
  return {
    type: FETCH_ALL_OFFERS_SUCCESS,
    offers: response.payload.data

  }
}

export function fetchAllOffersFailure(error){
  return {
    type: FETCH_ALL_OFFERS_FAILURE,
    error
  }
}

export function fetchOfferDetailsLoading(){
  return {
    type: FETCH_OFFER_DETAILS_LOADING
  }
}

export function fetchOfferDetails(id){
  return {
    type: FETCH_OFFER_DETAILS,
    payload: Axios.get(`http://localhost:3000/offers/${id}.json`)

  }
}

export function fetchOfferDetailsSuccess(response){
  return {
    type: FETCH_OFFER_DETAILS_SUCCESS,
    offer: response.payload.data
  }
}

export function fetchOfferDetailsFailure(error){
  return {
    type: FETCH_OFFER_DETAILS_FAILURE,
    error
  }
}
