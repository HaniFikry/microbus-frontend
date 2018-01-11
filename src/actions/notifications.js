import Axios from 'axios'
import {latestNotificationsApi, consumerNotificationsApi, markNotificationReadApi} from '../apiConfig'

export const FETCH_USER_NOTIFICATIONS_LOADING = 'FETCH_USER_NOTIFICATIONS_LOADING'
export const FETCH_USER_NOTIFICATIONS = 'FETCH_USER_NOTIFICATIONS'
export const FETCH_USER_NOTIFICATIONS_SUCCESS = 'FETCH_USER_NOTIFICATIONS_SUCCESS'
export const FETCH_USER_NOTIFICATIONS_FAILURE = 'FETCH_USER_NOTIFICATIONS_FAILURE'

export const FETCH_ALL_USER_NOTIFICATIONS_LOADING = 'FETCH_ALL_USER_NOTIFICATIONS_LOADING'
export const FETCH_ALL_USER_NOTIFICATIONS = 'FETCH_ALL_USER_NOTIFICATIONS'
export const FETCH_ALL_USER_NOTIFICATIONS_SUCCESS = 'FETCH_ALL_USER_NOTIFICATIONS_SUCCESS'
export const FETCH_ALL_USER_NOTIFICATIONS_FAILURE = 'FETCH_ALL_USER_NOTIFICATIONS_FAILURE'

export const MARK_NOTIFICATION_READ_LOADING = 'MARK_NOTIFICATION_READ_LOADING'
export const MARK_NOTIFICATION_READ = 'MARK_NOTIFICATION_READ'
export const MARK_NOTIFICATION_READ_SUCCESS = 'MARK_NOTIFICATION_READ_SUCCESS'
export const MARK_NOTIFICATION_READ_FAILURE = 'MARK_NOTIFICATION_READ_FAILURE'

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'


export function fetchUserNotificationsLoading(){
  return {
    type: FETCH_USER_NOTIFICATIONS_LOADING
  }
}

export function fetchUserNotifications(){
  return {
    type: FETCH_USER_NOTIFICATIONS,
    payload: Axios.get(latestNotificationsApi)
  }
}

export function fetchUserNotificationsSuccess(response){
  return {
    type: FETCH_USER_NOTIFICATIONS_SUCCESS,
    notifications: response.payload.data
  }
}

export function fetchUserNotificationsFailure(error){
  return {
    type: FETCH_USER_NOTIFICATIONS_FAILURE,
    error
  }
}

export function markNotificationReadLoading(){
  return {
    type: MARK_NOTIFICATION_READ_LOADING
  }
}

export function markNotificationRead(notification){
  return {
    type: MARK_NOTIFICATION_READ,
    payload: Axios.patch(markNotificationReadApi(notification.id) , {isRead : true} )
  }
}

export function markNotificationReadSuccess(response){
  return {
    type: MARK_NOTIFICATION_READ_SUCCESS,
    notification: response.payload.data
  }
}

export function markNotificationReadFailure(error){
  return {
    type: MARK_NOTIFICATION_READ_FAILURE,
    error
  }
}

export function addNotification(data){
  return {
    type: ADD_NOTIFICATION,
    data: data
  }
}

export function fetchAllUserNotificationsLoading(){
  return {
    type: FETCH_ALL_USER_NOTIFICATIONS_LOADING
  }
}

export function fetchAllUserNotifications(){
  return {
    type: FETCH_ALL_USER_NOTIFICATIONS,
    payload: Axios.get(consumerNotificationsApi)
  }
}

export function fetchAllUserNotificationsSuccess(response){
  return {
    type: FETCH_ALL_USER_NOTIFICATIONS_SUCCESS,
    notifications: response.payload.data
  }
}

export function fetchAllUserNotificationsFailure(error){
  return {
    type: FETCH_ALL_USER_NOTIFICATIONS_FAILURE,
    error
  }
}
