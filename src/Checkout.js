import React, {Component} from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';
import {Alert} from 'antd'
const CURRENCY = 'EGP';



export default class Checkout extends Component {


  fromEuroToCent = (amount) => amount * 100;

  successPayment = data => {
    const { chargeBalance, url } = this.props
    console.log(url)
    chargeBalance(data.data, url)
  };

  errorPayment = data => {
    alert('Payment Error');
  };

  onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      stripeToken: token.id,
      currency: CURRENCY,
      amount: this.fromEuroToCent(amount)
    })
    .then(this.successPayment)
    .catch(this.errorPayment);

render(){
 const { name, description, amount, message} = this.props;
  return (
    <div>

      <StripeCheckout
        name={name}
        description={description}
        amount={this.fromEuroToCent(amount)}
        token={this.onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
      />

      {
      message ?
        <Alert message={message} type="success" showIcon   closable />
      : ''
      }
    </div>
)
}
}
// export default Checkout;
// ====================================================================
//
// const fromEuroToCent = amount => amount * 100;
//
// const successPayment = data => {
//   alert('Payment Successful');
// };
//
// const errorPayment = data => {
//   alert('Payment Error');
// };
//
// const onToken = (amount, description) => token =>
//   axios.post(PAYMENT_SERVER_URL,
//     {
//       description,
//       stripeToken: token.id,
//       currency: CURRENCY,
//       amount: fromEuroToCent(amount)
//     })
//     .then(successPayment)
//     .catch(errorPayment);
//
// const Checkout = ({ name, description, amount }) =>
//   <StripeCheckout
//     name={name}
//     description={description}
//     amount={fromEuroToCent(amount)}
//     token={onToken(amount, description)}
//     currency={CURRENCY}
//     stripeKey={STRIPE_PUBLISHABLE}
//   />
//
// export default Checkout;
