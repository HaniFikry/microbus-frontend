import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';


export default class Header extends Component {
  componentWillMount(){
    const { getUser, user } = this.props;
    if(localStorage.jwtToken && user.user_email  == undefined) {
      getUser();
    }
  }
  render(){
    const { user, logout, vendor, vendorLogout} = this.props;
    if (user.user_type == 'consumer') {
      return (
        <div>
          <p> signed in as {user.user_email} </p>
          <a href="#" onClick={() => logout()}>Sign out</a>

        </div>
      )
    }else if (vendor.user_type == 'vendor') {
      return (
        <div>
          <p> signed in as {vendor.user_email} </p>
          <a href="#" onClick={() => vendorLogout()}>Sign out</a>

        </div>
      )
    }
     else {
    return (
      <div>
        <Link to='/new_consumer'>Register as consumer</Link>
        <Link to='/new_vendor'>Register as vendor</Link>
        <Link to='/consumer/login'>Login as consumer</Link>
        <Link to='/vendor/login'>Login as vendor</Link>
      </div>
    )
  }
  }
}
