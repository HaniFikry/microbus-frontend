import Axios from 'axios'
import {chargeMakmaksApi} from '../apiConfig'


export const CHARGE_MAKMAKS_LOADING = 'CHARGE_MAKMAKS_LOADING'
export const CHARGE_MAKMAKS = 'CHARGE_MAKMAKS'
export const CHARGE_MAKMAKS_SUCCESS = 'CHARGE_MAKMAKS_SUCCESS'
export const CHARGE_MAKMAKS_FAILURE = 'CHARGE_MAKMAKS_FAILURE'

export const CLEAR_CHARGE_SUCCESS_MESSAGE = 'CLEAR_CHARGE_SUCCESS_MESSAGE'

export function chargeMakmaksLoading(){
  return {
    type: CHARGE_MAKMAKS_LOADING
  }
}

export function chargeMakmaks(amount){
  return {
    type: CHARGE_MAKMAKS,
    payload: Axios.post(chargeMakmaksApi, {amount :amount})
  }
}

export function chargeMakmaksSuccess(response){
  return {
    type: CHARGE_MAKMAKS_SUCCESS,
    amount: response.payload.data
  }
}

export function chargeMakmaksFailure(error){
  return {
    type: CHARGE_MAKMAKS_FAILURE,
    error
  }
}

export function clearChargeSuccessMessage(){
  return {
    type: CLEAR_CHARGE_SUCCESS_MESSAGE
  }
}
