import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default class ListNotifications extends Component {
  componentWillMount(){
    const {user, vendor, fetchAllNotifications, fetchAllCurrentVendorNotifications} = this.props;
    if (user.user_name){
    fetchAllNotifications()
  } else if (vendor.user_name) {
    fetchAllCurrentVendorNotifications()
  }
  }

  render(){
    const { allNotifications, allVendorNotifications, user, vendor } = this.props;
    console.log(user.user_name, vendor.user_name)
    if (user.user_name) {
    return(
      <div className='all_notifications'>
        <h2> All Notifications </h2>
        <ul>
        {
          allNotifications.map((notification) =>
            <li><Link to={`/offers/${notification.offer_id}`}>{notification.body}</Link></li>
          )
        }
      </ul>
      </div>
    )
  } else if (vendor.user_name) {
    return(
      <div className='all_notifications'>
        <h2> All Notifications </h2>
        <ul>
        {
          allVendorNotifications.map((notification) =>
            <li><Link to={`/offer/${notification.offer_id}/completed`}>{notification.body}</Link></li>
          )
        }
      </ul>
      </div>
    )
  } else {
    return (
      <h1>no</h1>
    )
  }
  }
}
