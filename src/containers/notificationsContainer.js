import Notifications from '../components/notification'
import {connect} from 'react-redux'
import {fetchUserNotificationsLoading, fetchUserNotifications, fetchUserNotificationsSuccess, fetchUserNotificationsFailure, markNotificationReadLoading, markNotificationRead, markNotificationReadSuccess, markNotificationReadFailure, addNotification} from '../actions/notifications'


const mapStateToProps = function(state) {
  return {
    notifications: state.notifications.notifications,
    unreadCount: state.notifications.unreadCount,
    user: state.microbus.user,
    vendor: state.vendor.user
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchNotifications: function(){
      dispatch(fetchUserNotificationsLoading());
      dispatch(fetchUserNotifications()).then(function(response){
        if(response.payload.status < 400) {
          dispatch(fetchUserNotificationsSuccess(response));
        } else {
          dispatch(fetchUserNotificationsFailure(response.payload.error))
        }
      })
    }, markAsRead: function(notification) {
      dispatch(markNotificationReadLoading());
      dispatch(markNotificationRead(notification)).then(function(response){
        if (response.payload.status < 400) {
          dispatch(markNotificationReadSuccess(response))
        } else {
          dispatch(markNotificationReadFailure(response.payload.error))
        }
      })
    }, addNewNotification: function(data){
      dispatch(addNotification(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
