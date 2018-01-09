import {ADD_NOTIFICATION, FETCH_USER_NOTIFICATIONS_LOADING, FETCH_USER_NOTIFICATIONS_SUCCESS, FETCH_USER_NOTIFICATIONS_FAILURE, MARK_NOTIFICATION_READ_LOADING, MARK_NOTIFICATION_READ_SUCCESS, MARK_NOTIFICATION_READ_FAILURE} from '../actions/notifications'
const INITIAL_STATE = {
  notifications: [],
  unreadCount: '',
  error: null,
  loading: false
}

export default function(currentState = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER_NOTIFICATIONS_LOADING:
      return {
        ...currentState,
        loading: true
      }
    case FETCH_USER_NOTIFICATIONS_SUCCESS:
      return {
        ...currentState,
        notifications: action.notifications.notifications,
        unreadCount: action.notifications.notifications_count,
        loading: false
      }
    case FETCH_USER_NOTIFICATIONS_FAILURE:
      return {
        ...currentState,
        loading: false,
      }
    case MARK_NOTIFICATION_READ_LOADING:
      return {
        ...currentState,
        loading:true
      }
    case MARK_NOTIFICATION_READ_SUCCESS:
      return {
        ...currentState,
        loading:false,
        notifications: currentState.notifications.filter(notification =>
               (notification.id !== action.notification.notification.id)),
        unreadCount: action.notification.notifications_count

      }
    case MARK_NOTIFICATION_READ_FAILURE:
      return {
        ...currentState,
        loading:false,
        error: action.error
      }
    case ADD_NOTIFICATION:
      return {
        ...currentState,
        notifications: [...currentState.notifications, action.data],
        unreadCount: currentState.unreadCount + 1
      }
      default:
        return currentState
}
}
