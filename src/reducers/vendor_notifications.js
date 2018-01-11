import {ADD_VENDOR_NOTIFICATION, FETCH_VENDOR_NOTIFICATIONS_LOADING, FETCH_VENDOR_NOTIFICATIONS_SUCCESS, FETCH_VENDOR_NOTIFICATIONS_FAILURE, MARK_VENDOR_NOTIFICATION_READ_LOADING, MARK_VENDOR_NOTIFICATION_READ_SUCCESS, MARK_VENDOR_NOTIFICATION_READ_FAILURE, FETCH_ALL_VENDOR_NOTIFICATIONS_LOADING, FETCH_ALL_VENDOR_NOTIFICATIONS_SUCCESS, FETCH_ALL_VENDOR_NOTIFICATIONS_FAILURE} from '../actions/vendor_notifications'
const INITIAL_STATE = {
  vendor_notifications: [],
  vendor_unreadCount: '',
  error: null,
  loading: false,
  allNotifications: []
}

export default function(currentState = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_VENDOR_NOTIFICATIONS_LOADING:
      return {
        ...currentState,
        loading: true
      }
    case FETCH_VENDOR_NOTIFICATIONS_SUCCESS:
      return {
        ...currentState,
        vendor_notifications: action.notifications.notifications,
        vendor_unreadCount: action.notifications.notifications_count,
        loading: false
      }
    case FETCH_VENDOR_NOTIFICATIONS_FAILURE:
      return {
        ...currentState,
        loading: false,
      }
    case MARK_VENDOR_NOTIFICATION_READ_LOADING:
      return {
        ...currentState,
        loading:true
      }
    case MARK_VENDOR_NOTIFICATION_READ_SUCCESS:
    return {
      ...currentState,
      loading:false,
      vendor_notifications: [...currentState.vendor_notifications.map(notification => {
              if (notification.id == action.notification.notification.id){
                notification.isRead = true
              }
              return notification;
              })
            ],
      vendor_unreadCount: action.notification.notifications_count

    }
    case MARK_VENDOR_NOTIFICATION_READ_FAILURE:
      return {
        ...currentState,
        loading:false,
        error: action.error
      }
    case ADD_VENDOR_NOTIFICATION:
      return {
        ...currentState,
        vendor_notifications: [action.data, ...currentState.vendor_notifications],
        vendor_unreadCount: currentState.vendor_unreadCount + 1
      }
      case FETCH_ALL_VENDOR_NOTIFICATIONS_LOADING:
        return {
          ...currentState,
          loading: true
        }
      case FETCH_ALL_VENDOR_NOTIFICATIONS_SUCCESS:
        return {
          ...currentState,
          loading: false,
          allNotifications: action.notifications
        }
      case FETCH_ALL_VENDOR_NOTIFICATIONS_FAILURE:
        return {
          ...currentState,
          loading: false,
          error: action.error
        }
      default:
        return currentState
}
}
