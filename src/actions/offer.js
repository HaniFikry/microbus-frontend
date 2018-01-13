import Axios from 'axios'
import {offersApi, vendorOffersApi, offerDetailsApi, topOffersApi, latestOffersApi} from '../apiConfig'

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

export const FETCH_TOP_OFFERS_LOADING = 'FETCH_TOP_OFFERS_LOADING'
export const FETCH_TOP_OFFERS = 'FETCH_TOP_OFFERS'
export const FETCH_TOP_OFFERS_SUCCESS = 'FETCH_TOP_OFFERS_SUCCESS'
export const FETCH_TOP_OFFERS_FAILURE = 'FETCH_TOP_OFFERS_FAILURE'

export const FETCH_LATEST_OFFERS_LOADING = 'FETCH_LATEST_OFFERS_LOADING'
export const FETCH_LATEST_OFFERS = 'FETCH_LATEST_OFFERS'
export const FETCH_LATEST_OFFERS_SUCCESS = 'FETCH_LATEST_OFFERS_SUCCESS'
export const FETCH_LATEST_OFFERS_FAILURE = 'FETCH_LATEST_OFFERS_FAILURE'

export const CLEAR_SUCCESS_MESSAGE = 'CLEAR_SUCCESS_MESSAGE'

export const DELETE_OFFER_ERRORS = 'DELETE_OFFER_ERRORS'

export function createOfferLoading(){
  return {
    type: CREATE_OFFER_LOADING
  }
}

export function createOffer(offer){
  return {
    type: CREATE_OFFER,
    payload: Axios.post(offersApi, offer )
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

export function fetchVendorOffers(status){
  console.log(status)
  return {
    type: FETCH_VENDOR_OFFERS,
    payload: Axios.get(vendorOffersApi(status))
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
    payload: Axios.get(offersApi)
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
    payload: Axios.get(offerDetailsApi(id))

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

export function fetchTopOffersLoading(){
  return {
    type: FETCH_TOP_OFFERS_LOADING
  }
}

export function fetchTopOffers(){
  return {
    type: FETCH_TOP_OFFERS,
    payload: Axios.get(topOffersApi)
  }
}

export function fetchTopOffersSuccess(response){
  return {
    type: FETCH_TOP_OFFERS_SUCCESS,
    offers: response.payload.data

  }
}

export function fetchTopOffersFailure(error){
  return {
    type: FETCH_TOP_OFFERS_FAILURE,
    error
  }
}


export function fetchLatestOffersLoading(){
  return {
    type: FETCH_LATEST_OFFERS_LOADING
  }
}

export function fetchLatestOffers(){
  return {
    type: FETCH_LATEST_OFFERS,
    payload: Axios.get(latestOffersApi)
  }
}

export function fetchLatestOffersSuccess(response){
  return {
    type: FETCH_LATEST_OFFERS_SUCCESS,
    offers: response.payload.data

  }
}

export function fetchLatestOffersFailure(error){
  return {
    type: FETCH_LATEST_OFFERS_FAILURE,
    error
  }
}

export function clearSuccessMessage(){
  return {
    type: CLEAR_SUCCESS_MESSAGE
  }
}

export function deleteOfferErrors(){
  return {
    type: DELETE_OFFER_ERRORS
  }
}
