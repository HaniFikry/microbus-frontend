import Axios from 'axios';
import {vendorRegistrationApi, vendorLoginApi, currentVendorApi, vendorProductsApi, addVendorProductApi, deleteVendorProductApi, fetchProductApi, currentUserApi} from '../apiConfig'

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

export const FETCH_PRODUCTLIST_LOADING = 'FETCH_PRODUCTLIST_LOADING'
export const FETCH_PRODUCTLIST = 'FETCH_PRODUCTLIST'
export const FETCH_PRODUCTLIST_SUCCESS = 'FETCH_PRODUCTLIST_SUCCESS'
export const FETCH_PRODUCTLIST_FAILURE = 'FETCH_PRODUCTLIST_FAILURE'

export const ADD_ITEM_TO_PRODUCTLIST_LOADING = 'ADD_ITEM_TO_PRODUCTLIST_LOADING'
export const ADD_ITEM_TO_PRODUCTLIST = 'ADD_ITEM_TO_PRODUCTLIST'
export const ADD_ITEM_TO_PRODUCTLIST_FAILURE = 'ADD_ITEM_TO_PRODUCTLIST_FAILURE'
export const ADD_ITEM_TO_PRODUCTLIST_SUCCESS = 'ADD_ITEM_TO_PRODUCTLIST_SUCCESS'

export const CREATE_PRODUCTLIST_ITEM_LOADING = 'CREATE_PRODUCTLIST_ITEM_LOADING'
export const CREATE_PRODUCTLIST_ITEM = 'CREATE_PRODUCTLIST_ITEM'
export const CREATE_PRODUCTLIST_ITEM_SUCCESS = 'CREATE_PRODUCTLIST_ITEM_SUCCESS'
export const CREATE_PRODUCTLIST_ITEM_FAILURE = 'CREATE_PRODUCTLIST_ITEM_FAILURE'

export const DELETE_PRODUCTLIST_ITEM_LOADING = 'DELETE_PRODUCTLIST_ITEM_LOADING'
export const DELETE_PRODUCTLIST_ITEM = 'DELETE_PRODUCTLIST_ITEM'
export const DELETE_PRODUCTLIST_ITEM_SUCCESS = 'DELETE_PRODUCTLIST_ITEM_SUCCESS'
export const DELETE_PRODUCTLIST_ITEM_FAILURE = 'DELETE_PRODUCTLIST_ITEM_FAILURE'

export const FETCH_PRODUCT_LOADING = 'FETCH_PRODUCT_LOADING'
export const FETCH_PRODUCT = 'FETCH_PRODUCT'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'

export const UPDATE_VENDOR_BALANCE = 'UPDATE_VENDOR_BALANCE'
export const UPDATE_VENDOR_BALANCE_SUCCESS = 'UPDATE_VENDOR_BALANCE_SUCCESS'

export const VENDOR_LOGOUT = 'VENDOR_LOGOUT'

export const CLEAR_VENDOR_MESSAGES = 'CLEAR_VENDOR_MESSAGES'

export function registerNewVendrLoading(){
  return {
    type: REGISTER_NEW_VENDOR_LOADING
  }
}

export function registerNewVendor(vendor){
  return {
    type: REGISTER_NEW_VENDOR,
    payload: Axios.post(vendorRegistrationApi, {vendor})
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
    payload: Axios.post(vendorLoginApi, vendor)
  }
}
export function vendorLoginSuccess(response){
  return {
    type: VENDOR_LOGIN_SUCCESS,
    user: response.payload.data.user

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
  payload: Axios.get(currentVendorApi)
  }
}

export function fetchVendorSuccess(response){
  return {
    type: FETCH_VENDOR_SUCCESS,
    user: response.payload.data
  }
}

export function fetchProductListLoading(){
  return {
    type: FETCH_PRODUCTLIST_LOADING
  }
}

export function fetchProductList(){
  return {
    type: FETCH_PRODUCTLIST,
    payload: Axios.get(vendorProductsApi)
  }
}

export function fetchProductListSuccess(response){
  return {
    type: FETCH_PRODUCTLIST_SUCCESS,
    product_list: response.payload.data
  }
}

export function fetchProductListFailure(error){
  return {
    type: FETCH_PRODUCTLIST_FAILURE,
    error
  }
}
export function addItemToProductlistLoading(){
  return {
    type: ADD_ITEM_TO_PRODUCTLIST_LOADING
  }
}

export function addItemToProductlist(id){
  return {
    type: ADD_ITEM_TO_PRODUCTLIST,
    payload: Axios.post(vendorProductsApi, {"product_id" : id})
  }
}

export function addItemToProductlistSuccess(response){
  return {
    type: ADD_ITEM_TO_PRODUCTLIST_SUCCESS,
    item: response.payload.data
  }
}

export function addItemToProductlistFailure(error){
  return {
    type: ADD_ITEM_TO_PRODUCTLIST_FAILURE,
    error

  }
}

export function createProductlistItemLoading(){
  return {
    type: CREATE_PRODUCTLIST_ITEM_LOADING
  }
}

export function createProductlistItem(name){
  return {
    type: CREATE_PRODUCTLIST_ITEM,
    payload: Axios.post(addVendorProductApi, {"name": name})
  }
}

export function createProductlistItemSuccess(response){
  return {
    type: CREATE_PRODUCTLIST_ITEM_SUCCESS,
    item: response.payload.data
  }
}

export function createProductlistItemFailure(error){
  return {
    type: CREATE_PRODUCTLIST_ITEM_FAILURE,
    error
  }
}

export function deleteProductlistItemLoading(){
  return {
    type: DELETE_PRODUCTLIST_ITEM_LOADING
  }
}

export function deleteProductlistItem(id){
  return {
    type: DELETE_PRODUCTLIST_ITEM,
    payload: Axios.delete(deleteVendorProductApi , {params: {"id": id}})
  }
}

export function deleteProductlistItemSuccess(response){
  return {
    type: DELETE_PRODUCTLIST_ITEM_SUCCESS,
    id: response.payload.data.id
  }
}

export function deleteProductlistItemFailure(error){
  return {
    type: DELETE_PRODUCTLIST_ITEM_FAILURE,
    error
  }
}

export function fetchProductLoading(){
  return {
    type: FETCH_PRODUCT_LOADING
  }
}

export function fetchProduct(id){
  console.log(id )
  return {
    type: FETCH_PRODUCT,
    payload: Axios.get(fetchProductApi(id))
  }
}

export function fetchProductSuccess(response){
  return {
    type: FETCH_PRODUCT_SUCCESS,
    item: response.payload.data
  }
}

export function fetchProductFailure(error){
  return {
    type: FETCH_PRODUCT_FAILURE,
    error
  }
}

export function updateVendorBalance(){
  return {
  type: UPDATE_VENDOR_BALANCE,
  payload: Axios.get(currentUserApi)
  }
}

export function updateVendorBalanceSuccess(response){
  return {
  type: UPDATE_VENDOR_BALANCE_SUCCESS,
  amount: response.payload.data.user_balance
  }
}

export function clearVendorMessages(){
  return {
  type: CLEAR_VENDOR_MESSAGES
  }
}
