import React , {Component} from 'react'
import { Menu, Dropdown, Icon, Badge } from 'antd';
import './style.css'
import {Link} from 'react-router-dom'
import Cable from 'actioncable';






export default class Notifications extends Component {
componentWillMount(){
  this.createSocket();
  this.props.fetchNotifications();
}
createSocket() {
  const {user, vendor, addNewNotification} = this.props;
    let cable = Cable.createConsumer(`ws://localhost:3000/cable?token=${localStorage.jwtToken}`);
    if (user.user_name) {
    var notificationsCable = cable.subscriptions.create({
      channel: `NotificationsChannel`
    }, {
      connected: () => {},
      received: (data) => {
        console.log(data[0])
        addNewNotification(data)
      }
    });
  } else if (vendor.user_name) {
    var notificationsCable = cable.subscriptions.create({
      channel: `VendorNotificationsChannel`
    }, {
      connected: () => {},
      received: (data) => {
        console.log(data)
      }
    });
  }
}
render(){
  const {notifications, unreadCount, markAsRead} = this.props;
  console.log(notifications)
  return (
    <div id="notification">
      <Dropdown overlay={
          <Menu>
            {
              notifications.map((notification) =>
                <Menu.Item>
                  <Link onClick={() => markAsRead(notification)} to={`/offers/${notification.offer_id}`}>{notification.body}</Link>
                  {/* <Link to={`/offers/${notification.offer_id}`}>{notification.body}</Link> <input type="checkbox" checked={notification.isRead} onChange={() => markAsRead(notification)} /> */}
                </Menu.Item>

              )
            }
            <Menu.Divider />
            <Menu.Item>
              <Link to={`/notifications`}>view all notifications</Link>
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
}
}
