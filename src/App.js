import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Link} from 'react-router-dom';
import New from './containers/newConsumerContainer'
import Login from './containers/consumerLoginContainer'
import NewVendor from './containers/newVendorContainer'
import VendorLogin from './containers/vendorLoginContainer'
import Header from './containers/headerContainer'
import search from './components/search'
import consumer_profile from './containers/consumerProfileContainer'
import vendor_profile from './containers/vendorProfileContainer'
import offerForm from './containers/offerFormContainer'
import offersList from './containers/offersListContainer'
import MakmakStore from './components/store'


class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />


      <Route path="/new_consumer" component={New} />
      <Route path="/new_vendor" component={NewVendor  } />
      <Route path="/consumer/login" component={Login} />
      <Route path="/vendor/login" component={VendorLogin} />
      <Route path="/consumer/profile" component={consumer_profile} />
      <Route path="/vendor/profile" component={vendor_profile} />
      <Route path="/products/:id" component={offerForm} />
      <Route path="/offers" component={offersList} />
      <Route path="/store" component={MakmakStore} />

      </div>
    );
  }
}

export default App;
