import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';


export default class Header extends Component {
  componentWillMount(){
    const { isAuthenticated, getUser, user } = this.props;
    if(localStorage.jwtToken && user.consumer_email == undefined) {
      getUser();
    }
  }
  render(){
    const {isAuthenticated, user, logout } = this.props;
    if (isAuthenticated) {
      return (
        <div>
          <p> signed in as {user.consumer_email} </p>
          <a href="#" onClick={() => logout()}>Sign out</a>
<<<<<<< HEAD
=======

>>>>>>> 625a40e145dd5a2c86256f0f97a0f1fc5a6ab2ec
        </div>
      )
    } else {
    return (
      <div>
        <Link to='/new'>Register as consumer</Link>
        <Link to='/consumer/login'>Login as consumer</Link>
      </div>
    )
  }
  }
}
