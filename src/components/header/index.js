import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, Brand, Toggle, Collapse, Header} from 'react-bootstrap'
import {Avatar} from 'antd'
import './style.css'
import Notifications from '../../containers/notificationsContainer'


export default class HeaderComponent extends Component {
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
        <div className="navigation-bar">
          <Navbar inverse collapseOnSelect>
  		      <Navbar.Header>
    			    <Navbar.Brand>
    				        <Link to='/'>Microbus</Link>
    			     </Navbar.Brand>
  			       <Navbar.Toggle />
  		     </Navbar.Header>
  		    <Navbar.Collapse>
      			<Nav>
      				<NavItem eventKey={1} >
      					<Link to='/consumer/profile'>Profile</Link>
      				</NavItem>
      				<NavItem eventKey={2}>
      					<Link to='/offers'>Offers</Link>
      				</NavItem>
      			</Nav>

      			 <Nav pullRight>
      				<NavItem eventKey={1} >

              Signed in as : {user.user_name}
      				</NavItem>
      				<NavItem eventKey={3} >
      					Current balance: {user.user_balance}
      				</NavItem>
      				<NavItem eventKey={3} >
                <Notifications />
      				</NavItem>
      				<NavItem eventKey={2} href="#" onClick={() => logout()}>
      					Sign out
      				</NavItem>
      			</Nav>
  		   </Navbar.Collapse>
  	    </Navbar>
      </div>
      )
    }else if (vendor.user_type == 'vendor') {
      return (
        <div className="navigation-bar">
        <Navbar inverse collapseOnSelect>
  		     <Navbar.Header>
    			    <Navbar.Brand>
    				        <Link to='/'>Microbus</Link>
    			     </Navbar.Brand>
  			       <Navbar.Toggle />
  		    </Navbar.Header>
  		    <Navbar.Collapse>
      			<Nav>
      				<NavItem eventKey={1} >
      					<Link to='/vendor/profile'>Profile</Link>
      				</NavItem>
      				<NavItem eventKey={2}>
      					<Link to='/offers'>Offers</Link>
      				</NavItem>
      			</Nav>

      			 <Nav pullRight>
      				<NavItem eventKey={1} >
      					Signed in as {vendor.user_email}
      				</NavItem>
      				<NavItem eventKey={1} >
      					Current balance: {vendor.user_balance}
      				</NavItem>
      				<NavItem eventKey={1} >
                <Notifications />
      				</NavItem>
      				<NavItem eventKey={2} href="#" onClick={() => vendorLogout()}>
      					Sign out
      				</NavItem>
      			</Nav>
  		   </Navbar.Collapse>
	     </Navbar>
     </div>
      )
    } else {
      return (
        <div className="navigation-bar">
          <Navbar inverse collapseOnSelect>
  		      <Navbar.Header>
    			    <Navbar.Brand>
                <Link to='/'>Microbus</Link>
    			     </Navbar.Brand>
  			       <Navbar.Toggle />
  		     </Navbar.Header>
    		    <Navbar.Collapse>
        			<Nav>
        				<NavItem>
        					<Link to='/new_consumer'>Register as consumer</Link>
        				</NavItem>
        				<NavItem >
        					<Link to='/new_vendor'>Register as vendor</Link>
        				</NavItem>
        			</Nav>

        			 <Nav pullRight>
        				<NavItem eventKey={1}>
        					  <Link to='/consumer/login'>Login as consumer</Link>
        				</NavItem>
        				<NavItem eventKey={2}>
        					<Link to='/vendor/login'>Login as vendor</Link>
        				</NavItem>
        			</Nav>
    		   </Navbar.Collapse>
  	     </Navbar>
        </div>
      )
    }

  }
}
 {/* render(){
    const { user, logout, vendor, vendorLogout} = this.props;
    if (user.user_type == 'consumer') {
      return (
        <div>
          <p> signed in as {user.user_email}  Current balance : {user.user_balance} MakMak</p>
          <a href="#" onClick={() => logout()}>Sign out</a>

s        </div>
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
} */}
