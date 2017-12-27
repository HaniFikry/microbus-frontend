import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import New from './containers/newConsumerContainer'
import Login from './containers/consumerLoginContainer'
import Header from './containers/headerContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
      
          <Header />


      <Route path="/new" component={New} />
      <Route path="/consumer/login" component={Login} />
      </div>
    );
  }
}

export default App;
