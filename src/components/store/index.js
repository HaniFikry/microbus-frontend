import React, {Component} from 'react';
import Checkout from '../../containers/checkoutContainer'

export default class MakmakStore extends Component {
  constructor(){
    super()
    this.state = {
      amount: ''
    }
  }

  handleChange(event) {
    this.setState({amount: event.target.value})
  }
  render(){
    return (
      <div>
        <div>
        <label>
          <p> Enter the amount of MAKMAKS You want to purchase! </p>
          <input type="number"  name='price' onChange={this.handleChange.bind(this)} required={true}/>
        </label>
      </div>
      <Checkout
          name={'MakMak Store'}
          description={`Purchase of ${this.state.amount} makmaks`}
          amount={this.state.amount}
        />
      </div>
    )
  }
}
