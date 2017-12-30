import Axios from 'axios';

export const REGISTER_NEW_VENDOR_LOADING = 'REGISTER_NEW_VENDOR_LOADING';
export const REGISTER_NEW_VENDOR = 'REGISTER_NEW_VENDOR';
export const REGISTER_NEW_VENDOR_SUCCESS = 'REGISTER_NEW_VENDOR_SUCCESS';
export const REGISTER_NEW_VENDOR_FAILURE = 'REGISTER_NEW_VENDOR_FAILURE';

export const VENDOR_LOGIN_LOADING = 'VENDOR_LOGIN_LOADING';
export const VENDOR_LOGIN = 'VENDOR_LOGIN';
export const VENDOR_LOGIN_SUCCESS = 'VENDOR_LOGIN_SUCCESS';
export const VENDOR_LOGIN_FAILURE = 'VENDOR_LOGIN_FAILURE';

export const FETCH_VENDOR = 'FETCH_VENDOR'
export const FETCH_VENDOR_SUCCESS = 'FETCH_VENDOR_SUCCESS'
export const FETCH_VENDOR_FAILURE = 'FETCH_VENDOR_FAILURE'

export const VENDOR_LOGOUT = 'VENDOR_LOGOUT'

export function registerNewVendrLoading(){
  return {
    type: REGISTER_NEW_VENDOR_LOADING
  }
}

export function registerNewVendor(vendor){
  return {
    type: REGISTER_NEW_VENDOR,
    payload: Axios.post(`http://localhost:3000/vendor_registrations`, {vendor})
  }
}

export function registerNewVendorSuccess(response){
  return {
    type: REGISTER_NEW_VENDOR_SUCCESS,
    message: response.payload.status
  }
}

export function registerNewVendorFailure(error){
  return {
    type: REGISTER_NEW_VENDOR_FAILURE,
    error
  }
}

export function vendorLoginLoading(){
  return {
    type: VENDOR_LOGIN_LOADING
  }
}

export function vendorLogin(vendor){
  return {
    type: VENDOR_LOGIN,
    payload: Axios.post(`http://localhost:3000/vendor/login`, vendor)
  }
}
export function vendorLoginSuccess(response){
  return {
    type: VENDOR_LOGIN_SUCCESS,
    user: response.payload.data.vendor

  }
}
export function vendorLoginFailure(error){
  return {
    type: VENDOR_LOGIN_FAILURE,
    error
  }
}

export function vendorLogout(){
  return {
  type: VENDOR_LOGOUT
  }
}

export function fetchVendor(){
  return {
  type: FETCH_VENDOR,
  payload: Axios.get('http://localhost:3000/current_vendor')
  }
}

export function fetchVendorSuccess(response){
  return {
    type: FETCH_VENDOR_SUCCESS,
    user: response.payload.data
  }
}
