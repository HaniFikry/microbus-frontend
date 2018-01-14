import {connect} from 'react-redux';
import {fetchAllUserNotificationsLoading, fetchAllUserNotifications, fetchAllUserNotificationsSuccess, fetchAllUserNotificationsFailure} from '../actions/notifications'
import {fetchAllVendorNotificationsLoading, fetchAllVendorNotifications, fetchAllVendorNotificationsSuccess, fetchAllVendorNotificationsFailure} from '../actions/vendor_notifications'
import ListNotifications from '../components/list_notifications'

const mapStateToProps = function(state){
  return {
    allNotifications : state.notifications.allNotifications,
    allVendorNotifications: state.vendor_notifications.allNotifications,
    user : state.consumer.user,
    vendor : state.vendor.user
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    fetchAllNotifications : function(){
      dispatch(fetchAllUserNotificationsLoading())
      dispatch(fetchAllUserNotifications()).then(function(response){
        if(response.payload.status < 400) {
          dispatch(fetchAllUserNotificationsSuccess(response))
        } else {
          dispatch(fetchAllUserNotificationsFailure(response.payload.error))
        }
      })
    }, fetchAllCurrentVendorNotifications : function(){
      dispatch(fetchAllVendorNotificationsLoading())
      dispatch(fetchAllVendorNotifications()).then(function(response){
        if(response.payload.status < 400) {
          dispatch(fetchAllVendorNotificationsSuccess(response))
        } else {
          dispatch(fetchAllVendorNotificationsFailure(response.payload.error))
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNotifications)
