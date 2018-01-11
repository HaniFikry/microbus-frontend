import React , {Component} from 'react'
import { Menu, Dropdown, Icon, Badge } from 'antd';
import './style.css'
import {Link} from 'react-router-dom'
import Cable from 'actioncable';
import {webSocketApi} from '../apiConfig'





export default class Notifications extends Component {
componentWillMount(){
  const {user, vendor} = this.props;
  this.createSocket();
  if (user.user_name) {
  this.props.fetchNotifications();
} else if (vendor.user_name) {
  this.props.fetchCurrentVendorNotifications();
}
}
createSocket() {
  const {user, vendor, addNewNotification, addNewVendorNotification} = this.props;
    let cable = Cable.createConsumer(webSocketApi);
    if (user.user_name) {
    var notificationsCable = cable.subscriptions.create({
      channel: `NotificationsChannel`
    }, {
      connected: () => {},
      received: (data) => {
        addNewNotification(data)
      }
    });
  } else if (vendor.user_name) {
    var notificationsCable = cable.subscriptions.create({
      channel: `VendorNotificationsChannel`
    }, {
      connected: () => {},
      received: (data) => {
        addNewVendorNotification(data);
        this.props.getNewBalance();
      }
    });
  }
}
render(){
  const {notifications, unreadCount, markAsRead, user , vendor, vendor_notifications, vendor_unreadCount, markVendorNotificationAsRead} = this.props;
  if (user.user_name){
  return (
    <div id="notification">
      <Dropdown overlay={
          <Menu>
            {
              notifications.map((notification) =>
                <Menu.Item>
                  <Link onClick={() => {notification.isRead ? '' : markAsRead(notification)}} to={`/offers/${notification.offer_id}`}>{notification.isRead ? notification.body : <strong>{notification.body}</strong>}</Link>
                  {/* <Link to={`/offers/${notification.offer_id}`}>{notification.body}</Link> <input type="checkbox" checked={notification.isRead} onChange={() => markAsRead(notification)} /> */}
                </Menu.Item>

              )
            }
            <Menu.Divider />
            <Menu.Item>
              <Link to={`/consumer/notifications`}>view all notifications</Link>
            </Menu.Item>
          </Menu>
      } trigger={['click']}>
        <Badge count={unreadCount} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} offset={20,200}>
          <a className="ant-dropdown-link" href="#">
            <i class="fa fa-bell-o" aria-hidden="true"></i>
          </a>
        </Badge>
      </Dropdown>
    </div>
  )
} else if (vendor.user_name) {
  return (
    <div id="notification">
      <Dropdown overlay={
          <Menu>
            {
              vendor_notifications.map((notification) =>
                <Menu.Item>
                  <Link onClick={() => {notification.isRead ? '' : markVendorNotificationAsRead(notification)}} to={`/vendor/profile`}>{notification.isRead ? notification.body : <strong>{notification.body}</strong>}</Link>
                  {/* <Link to={`/offers/${notification.offer_id}`}>{notification.body}</Link> <input type="checkbox" checked={notification.isRead} onChange={() => markAsRead(notification)} /> */}
                </Menu.Item>

              )
            }
            <Menu.Divider />
            <Menu.Item>
              <Link to={`/vendor/notifications`}>view all notifications</Link>
            </Menu.Item>
          </Menu>
      } trigger={['click']}>
        <Badge count={vendor_unreadCount} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} offset={20,200}>
          <a className="ant-dropdown-link" href="#">
            <i class="fa fa-bell-o" aria-hidden="true"></i>
          </a>
        </Badge>
      </Dropdown>
    </div>
  )
}
}
}
