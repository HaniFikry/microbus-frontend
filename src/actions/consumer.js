import Axios from 'axios';

export const REGISTER_NEW_USER_LOADING = 'REGISTER_NEW_USER_LOADING';
export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const REGISTER_NEW_USER_SUCCESS = 'REGISTER_NEW_USER_SUCCESS';
export const REGISTER_NEW_USER_FAILURE = 'REGISTER_NEW_USER_FAILURE';

export const USER_LOGIN_LOADING = 'USER_LOGIN_LOADING';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

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
export function userLoginSuccess(){
  return {
    type: USER_LOGIN_SUCCESS
  }
}
export function userLoginFailure(){
  return {
    type: USER_LOGIN_FAILURE
  }
}
