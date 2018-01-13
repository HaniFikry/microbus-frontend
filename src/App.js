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
import consumer_profile from './components/consumer_profile'
import offerForm from './containers/offerFormContainer'
import offersList from './containers/offersListContainer'
import MakmakStore from './components/store'
import OfferDetails from './containers/offerDetailsContainer'
import OrderSuccess from './containers/offerSuccessContainer'
import OfferCompleted from './containers/offerCompletedContainer'
import Main from './containers/MainContainer'
import list_notifications from './containers/listNotificationsContainer'
import requireAuth from './utils/requireAuth'
import requireVendorAuth from './utils/requireVendorAuth'
import requireConsumerAuth from './utils/requireConsumerAuth'
import VendorProfile from './components/vendor_profile'


class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />

      <Route path="/offer/:id/completed" exact component={requireVendorAuth(OfferCompleted)} />
      <Route path="/offer/:id/success" exact component={requireConsumerAuth(OrderSuccess)} />
      <Route path="/offers/:id" component={requireAuth(OfferDetails)} />
      <Route path="/new_consumer" component={New} />
      <Route path="/new_vendor" component={NewVendor} />
      <Route path="/consumer/login" component={Login} />
      <Route path="/vendor/login" component={VendorLogin} />
      <Route path="/consumer/profile" component={requireConsumerAuth(consumer_profile)} />
      <Route path="/vendor/profile" component={requireVendorAuth(VendorProfile)} />
      <Route path="/products/:id" component={requireVendorAuth(offerForm)} />
      <Route path="/consumer/notifications" component={requireConsumerAuth(list_notifications)} />
      <Route path="/vendor/notifications" component={requireVendorAuth(list_notifications)} />
      <Route path="/offers" exact component={offersList} />
      <Route path="/store" component={requireConsumerAuth(MakmakStore)} />
      <Route exact path="/" component={Main} />

      </div>
    );
  }
}

export default App;
