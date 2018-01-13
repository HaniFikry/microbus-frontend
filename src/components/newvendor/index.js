import React , {Component} from 'react';
import history from '../../history';
import {Alert} from 'antd';



export default class NewVendor extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleChange(event) {
    const field = event.target.name;
    const newUser = this.state;
    newUser[field] = event.target.value;
    return this.setState({newUser: newUser});
  }
  componentWillMount(){
    if (localStorage.jwtToken){
      history.push('/')
    }
    this.props.clearRegistrationMessages()
  }

  render(){
    const {registerVendor, error, message} = this.props;
    return(
      <div>
        <h2 className="secondary-header"> Register As Vendor </h2>
        {
        message ?
          <Alert
             description={message}
             type="success"
             closable
          />
          :
        error ?
        error.map((singleError) =>
        <Alert
           description={singleError}
           type="error"
           closable
        />
      )
      : null

      }

      <form onSubmit={(event) => {event.preventDefault(); registerVendor(this.state)}}>

          <div>
           <label>
             <p> Name: </p>
             <input type="text" value={this.state.name} name='name' onChange={this.handleChange.bind(this)} required={true}/>
           </label>
          </div>
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
           <div>
           <label>
             <p> Confirm password </p>
             <input type="password" value={this.state.password_confirmation}  name='password_confirmation' onChange={this.handleChange.bind(this)}/>
           </label>
         </div>
         <input type="submit" value="Register"  />
        </form>
      </div>
    )
  }
}
