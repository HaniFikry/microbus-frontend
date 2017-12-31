import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Link} from 'react-router-dom';
import New from './containers/newConsumerContainer'
import Login from './containers/consumerLoginContainer'
import Header from './containers/headerContainer'
import search from './components/search'
import profile from './containers/profileContainer'


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Header />


      <Route path="/new" component={New} />
      <Route path="/consumer/login" component={Login} />
      <Route path="/profile" component={profile} />
      </div>
    );
  }
}

export default App;
