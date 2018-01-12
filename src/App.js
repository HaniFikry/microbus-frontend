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
import offerForm from './containers/offerFormContainer'
import offersList from './containers/offersListContainer'
import MakmakStore from './components/store'
import OfferDetails from './containers/offerDetailsContainer'
import OrderSuccess from './containers/offerSuccessContainer'
import Main from './containers/MainContainer'

import list_notifications from './containers/listNotificationsContainer'
import requireAuth from './utils/requireAuth'
import requireVendorAuth from './utils/requireVendorAuth'
import Test from './components/test'


class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />


      <Route path="/offer/:id/success" exact component={OrderSuccess} />
      <Route path="/offers/:id" component={requireAuth(OfferDetails)} />
      <Route path="/new_consumer" component={New} />
      <Route path="/new_vendor" component={NewVendor  } />
      <Route path="/consumer/login" component={Login} />
      <Route path="/vendor/login" component={VendorLogin} />
      <Route path="/consumer/profile" component={requireAuth(consumer_profile)} />
      <Route path="/vendor/profile" component={requireVendorAuth(Test)} />
      <Route path="/products/:id" component={requireVendorAuth(offerForm)} />
      <Route path="/consumer/notifications" component={requireAuth(list_notifications)} />
      <Route path="/vendor/notifications" component={requireVendorAuth(list_notifications)} />
      <Route path="/offers" exact component={offersList} />
      <Route path="/store" component={requireAuth(MakmakStore)} />
      <Route exact path="/" component={Main} />

      </div>
    );
  }
}

export default App;
