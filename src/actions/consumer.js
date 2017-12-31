import Axios from 'axios';

export const REGISTER_NEW_USER_LOADING = 'REGISTER_NEW_USER_LOADING';
export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const REGISTER_NEW_USER_SUCCESS = 'REGISTER_NEW_USER_SUCCESS';
export const REGISTER_NEW_USER_FAILURE = 'REGISTER_NEW_USER_FAILURE';

export const USER_LOGIN_LOADING = 'USER_LOGIN_LOADING';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

export const USER_LOGOUT = 'USER_LOGOUT'

<<<<<<< HEAD
export const FETCH_WISHLIST_LOADING = 'FETCH_WISHLIST_LOADING'
export const FETCH_WISHLIST = 'FETCH_WISHLIST'
export const FETCH_WISHLIST_SUCCESS = 'FETCH_WISHLIST_SUCCESS'
export const FETCH_WISHLIST_FAILURE = 'FETCH_WISHLIST_FAILURE'

export const ADD_ITEM_TO_WISHLIST_LOADING = 'ADD_ITEM_TO_WISHLIST_LOADING'
export const ADD_ITEM_TO_WISHLIST = 'ADD_ITEM_TO_WISHLIST'
export const ADD_ITEM_TO_WISHLIST_SUCCESS = 'ADD_ITEM_TO_WISHLIST_SUCCESS'
export const ADD_ITEM_TO_WISHLIST_FAILURE = 'ADD_ITEM_TO_WISHLIST_FAILURE'

export const CREATE_WISHLIST_ITEM_LOADING = 'CREATE_WISHLIST_ITEM_LOADING'
export const CREATE_WISHLIST_ITEM = 'CREATE_WISHLIST_ITEM'
export const CREATE_WISHLIST_ITEM_SUCCESS = 'CREATE_WISHLIST_ITEM_SUCCESS'
export const CREATE_WISHLIST_ITEM_FAILURE = 'CREATE_WISHLIST_ITEM_FAILURE'

=======
>>>>>>> 625a40e145dd5a2c86256f0f97a0f1fc5a6ab2ec
export function registerNewUserLoading(){
  return {
    type: REGISTER_NEW_USER_LOADING
  }
}

export function registerNewUser(consumer){
  return {
    type: REGISTER_NEW_USER,
    payload: Axios.post(`http://localhost:3000/consumer_registrations`, {consumer})
  }
}

export function registerNewUserSuccess(response){
  return {
    type: REGISTER_NEW_USER_SUCCESS,
    message: response.payload.status
  }
}

export function registerNewUserFailure(error){
  return {
    type: REGISTER_NEW_USER_FAILURE,
    error
  }
}

export function userLoginLoading(){
  return {
    type: USER_LOGIN_LOADING
  }
}

export function userLogin(user){
  return {
    type: USER_LOGIN,
    payload: Axios.post(`http://localhost:3000/consumer/login`, user)
  }
}
export function userLoginSuccess(response){
  return {
    type: USER_LOGIN_SUCCESS,
    user: response.payload.data.consumer

  }
}
export function userLoginFailure(error){
  return {
    type: USER_LOGIN_FAILURE,
    error
  }
}

export function userLogout(){
  return {
  type: USER_LOGOUT
  }
}

export function fetchUser(){
  return {
  type: FETCH_USER,
  payload: Axios.get('http://localhost:3000/current_user')
  }
}

export function fetchUserSuccess(response){
  return {
    type: FETCH_USER_SUCCESS,
    user: response.payload.data
  }
}
<<<<<<< HEAD

export function fetchWishListLoading(){
  return {
    type: FETCH_WISHLIST_LOADING
  }
}

export function fetchWishList(){
  return {
    type: FETCH_WISHLIST,
    payload: Axios.get('http://localhost:3000/wishlists.json')
  }
}

export function fetchWishListSuccess(response){
  return {
    type: FETCH_WISHLIST_SUCCESS,
    wishlist: response.payload.data
  }
}

export function fetchWishListFailure(error){
  return {
    type: FETCH_WISHLIST_FAILURE,
    error
  }
}

export function addItemToWishlistLoading(){
  return {
    type: ADD_ITEM_TO_WISHLIST_LOADING
  }
}

export function addItemToWishlist(id){
  return {
    type: ADD_ITEM_TO_WISHLIST,
    payload: Axios.post('http://localhost:3000/wishlists.json', {"product_id" : id})
  }
}

export function addItemToWishlistSuccess(response){
  return {
    type: ADD_ITEM_TO_WISHLIST_SUCCESS,
    item: response.payload.data
  }
}

export function addItemToWishlistFailure(error){
  return {
    type: ADD_ITEM_TO_WISHLIST_FAILURE,
    error

  }
}

export function createWishlistItemLoading(){
  return {
    type: CREATE_WISHLIST_ITEM_LOADING
  }
}

export function createWishlistItem(name){
  return {
    type: CREATE_WISHLIST_ITEM,
    payload: Axios.post(`http://localhost:3000/consumer/addproduct.json`, {"name": name})
  }
}

export function createWishlistItemSuccess(response){
  return {
    type: CREATE_WISHLIST_ITEM_SUCCESS,
    item: response.payload.data
  }
}

export function createWishlistItemFailure(error){
  return {
    type: CREATE_WISHLIST_ITEM_FAILURE,
    error
  }
}
=======
>>>>>>> 625a40e145dd5a2c86256f0f97a0f1fc5a6ab2ec
