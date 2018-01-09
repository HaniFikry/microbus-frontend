import Axios from 'axios'

export const FETCH_USER_NOTIFICATIONS_LOADING = 'FETCH_USER_NOTIFICATIONS_LOADING'
export const FETCH_USER_NOTIFICATIONS = 'FETCH_USER_NOTIFICATIONS'
export const FETCH_USER_NOTIFICATIONS_SUCCESS = 'FETCH_USER_NOTIFICATIONS_SUCCESS'
export const FETCH_USER_NOTIFICATIONS_FAILURE = 'FETCH_USER_NOTIFICATIONS_FAILURE'

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
    payload: Axios.get(`http://localhost:3000/consumer/notifications`)
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
    payload: Axios.patch(`http://localhost:3000/consumer/notifications/${notification.id}` , {isRead : true} )
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
