import Notifications from '../components/notification'
import {connect} from 'react-redux'
import {fetchUserNotificationsLoading, fetchUserNotifications, fetchUserNotificationsSuccess, fetchUserNotificationsFailure, markNotificationReadLoading, markNotificationRead, markNotificationReadSuccess, markNotificationReadFailure, addNotification} from '../actions/notifications'
import {fetchVendorNotificationsLoading, fetchVendorNotifications, fetchVendorNotificationsSuccess, fetchVendorNotificationsFailure, markVendorNotificationRead, markVendorNotificationReadLoading, markVendorNotificationReadSuccess, markVendorNotificationReadFailure, addVendorNotification} from '../actions/vendor_notifications'
import {updateVendorBalance, updateVendorBalanceSuccess} from '../actions/vendor'
import {updateUserBalance, updateUserBalanceSuccess} from '../actions/consumer'
const mapStateToProps = function(state) {
  return {
    notifications: state.notifications.notifications,
    unreadCount: state.notifications.unreadCount,
    user: state.consumer.user,
    vendor: state.vendor.user,
    vendor_notifications: state.vendor_notifications.vendor_notifications,
    vendor_unreadCount: state.vendor_notifications.vendor_unreadCount

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
    },
    fetchCurrentVendorNotifications : function(){
      dispatch(fetchVendorNotificationsLoading());
      dispatch(fetchVendorNotifications()).then(function(response){
        if(response.payload.status < 400) {
          dispatch(fetchVendorNotificationsSuccess(response))
        } else {
          dispatch(fetchVendorNotificationsFailure(response.payload.error))
        }
      })
    }, addNewVendorNotification: function(data){
      dispatch(addVendorNotification(data))
    }, markVendorNotificationAsRead: function(notification) {
      dispatch(markVendorNotificationReadLoading());
      dispatch(markVendorNotificationRead(notification)).then(function(response){
        if (response.payload.status < 400) {
          dispatch(markVendorNotificationReadSuccess(response))
        } else {
          dispatch(markVendorNotificationReadFailure(response.payload.error))
        }
      })
    }, getNewBalance : function(){
      dispatch(updateVendorBalance()).then(function(response){
        if (response.payload.status < 400) {
          dispatch(updateVendorBalanceSuccess(response))
        }
      })
  }, getUserBalance : function(){
    dispatch(updateUserBalance()).then(function(response){
      if (response.payload.status < 400) {
        dispatch(updateUserBalanceSuccess(response))
      }
    })
}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
