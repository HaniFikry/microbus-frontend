import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Alert} from 'antd';
import history from '../../history'
import './style.css'


export default class Login extends Component {
  constructor(){
    super();
    this.state= {
      email: '',
      password: ''
    }
  }
  componentWillMount(){
    if (localStorage.jwtToken){
      history.push('/')
    }
    this.props.clearErrorMessages();
  }

  handleChange(event) {
    const field = event.target.name;
    const login = this.state;
    login[field] = event.target.value;
    return this.setState({login: login});
  }




  render() {
    const {loginConsumer, error} = this.props;
    return(
      <div>
        <h2 className="secondary-header"> Consumer Login</h2>
        <div className="login">
          {
          error ?
          <Alert
             description={error}
             type="error"
             closable
          /> : null
          }
          <form onSubmit={(event) => {event.preventDefault(); loginConsumer(this.state)}}>
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
            <input className="submit" type="submit" value="Login"  />
          </form>
        </div>
      </div>
    )
  }
}
