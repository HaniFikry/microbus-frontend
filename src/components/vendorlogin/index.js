import React, {Component} from 'react';

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


  render() {
    const {loginVendor} = this.props;
    return(
      <div>
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
