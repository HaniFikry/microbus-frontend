import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Alert} from 'antd'
import history from '../../history'


export default class VendorLogin extends Component {
  constructor(){
    super();
    this.state= {
      email: '',
      password: ''
    }
  }

  handleChange(event) {
    const field = event.target.name;
    const login = this.state;
    login[field] = event.target.value;
    return this.setState({login: login});
  }

  componentWillMount(){
    if (localStorage.jwtToken){
      history.push('/')
    }
  }

  render() {
    const {loginVendor, error} = this.props;
    return(
      <div>
        {
        error ?
        <Alert
           description={error}
           type="error"
           closable
        /> : null
       }
        <form onSubmit={(event) => {event.preventDefault(); loginVendor(this.state)}}>
      <div>
        <label>
          <p> Email: </p>
          <input type="text" value={this.state.email} name='email' onChange={this.handleChange.bind(this)} required={true}/>
        </label>
      </div>
        <div>
        <label>
          <p> Password: </p>
          <input type="password" value={this.state.password} name='password' onChange={this.handleChange.bind(this)} required={true}/>
        </label>
      </div>
        <input type="submit" value="Login"  />

      </form>
      </div>
    )
  }
}
