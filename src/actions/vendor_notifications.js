import Axios from 'axios'
import {vendorLatestNotificationsApi, markVendorNotificationReadApi, vendorNotificationsApi} from '../apiConfig'

export const FETCH_VENDOR_NOTIFICATIONS_LOADING = 'FETCH_VENDOR_NOTIFICATIONS_LOADING'
export const FETCH_VENDOR_NOTIFICATIONS = 'FETCH_VENDOR_NOTIFICATIONS'
export const FETCH_VENDOR_NOTIFICATIONS_SUCCESS = 'FETCH_VENDOR_NOTIFICATIONS_SUCCESS'
export const FETCH_VENDOR_NOTIFICATIONS_FAILURE = 'FETCH_VENDOR_NOTIFICATIONS_FAILURE'

export const MARK_VENDOR_NOTIFICATION_READ_LOADING = 'MARK_VENDOR_NOTIFICATION_READ_LOADING'
export const MARK_VENDOR_NOTIFICATION_READ = 'MARK_VENDOR_NOTIFICATION_READ'
export const MARK_VENDOR_NOTIFICATION_READ_SUCCESS = 'MARK_VENDOR_NOTIFICATION_READ_SUCCESS'
export const MARK_VENDOR_NOTIFICATION_READ_FAILURE = 'MARK_VENDOR_NOTIFICATION_READ_FAILURE'


export const FETCH_ALL_VENDOR_NOTIFICATIONS_LOADING = 'FETCH_ALL_VENDOR_NOTIFICATIONS_LOADING'
export const FETCH_ALL_VENDOR_NOTIFICATIONS = 'FETCH_ALL_VENDOR_NOTIFICATIONS'
export const FETCH_ALL_VENDOR_NOTIFICATIONS_SUCCESS = 'FETCH_ALL_VENDOR_NOTIFICATIONS_SUCCESS'
export const FETCH_ALL_VENDOR_NOTIFICATIONS_FAILURE = 'FETCH_ALL_VENDOR_NOTIFICATIONS_FAILURE'


export const ADD_VENDOR_NOTIFICATION = 'ADD_VENDOR_NOTIFICATION'


export function fetchVendorNotificationsLoading(){
  return {
    type: FETCH_VENDOR_NOTIFICATIONS_LOADING
  }
}

export function fetchVendorNotifications(){
  return {
    type: FETCH_VENDOR_NOTIFICATIONS,
    payload: Axios.get(vendorLatestNotificationsApi)
  }
}

export function fetchVendorNotificationsSuccess(response){
  return {
    type: FETCH_VENDOR_NOTIFICATIONS_SUCCESS,
    notifications: response.payload.data
  }
}

export function fetchVendorNotificationsFailure(error){
  return {
    type: FETCH_VENDOR_NOTIFICATIONS_FAILURE,
    error
  }
}

export function markVendorNotificationReadLoading(){
  return {
    type: MARK_VENDOR_NOTIFICATION_READ_LOADING
  }
}

export function markVendorNotificationRead(notification){
  return {
    type: MARK_VENDOR_NOTIFICATION_READ,
    payload: Axios.patch(markVendorNotificationReadApi(notification.id) , {isRead : true} )
  }
}

export function markVendorNotificationReadSuccess(response){
  return {
    type: MARK_VENDOR_NOTIFICATION_READ_SUCCESS,
    notification: response.payload.data
  }
}

export function markVendorNotificationReadFailure(error){
  return {
    type: MARK_VENDOR_NOTIFICATION_READ_FAILURE,
    error
  }
}

export function addVendorNotification(data){
  return {
    type: ADD_VENDOR_NOTIFICATION,
    data: data
  }
}
export function fetchAllVendorNotificationsLoading(){
  return {
    type: FETCH_ALL_VENDOR_NOTIFICATIONS_LOADING
  }
}

export function fetchAllVendorNotifications(){
  return {
    type: FETCH_ALL_VENDOR_NOTIFICATIONS,
    payload: Axios.get(vendorNotificationsApi)
  }
}

export function fetchAllVendorNotificationsSuccess(response){
  return {
    type: FETCH_ALL_VENDOR_NOTIFICATIONS_SUCCESS,
    notifications: response.payload.data
  }
}

export function fetchAllVendorNotificationsFailure(error){
  return {
    type: FETCH_ALL_VENDOR_NOTIFICATIONS_FAILURE,
    error
  }
}
