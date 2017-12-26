import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import New from './containers/newConsumerContainer'
import Login from './containers/consumerLoginContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to='/new'>Register as consumer</Link>
          <Link to='/consumer/login'>Login as consumer</Link>

        </header>

      <Route path="/new" component={New} />
      <Route path="/consumer/login" component={Login} />
      </div>
    );
  }
}

export default App;
