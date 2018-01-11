const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://microbus-api.herokuapp.com/charges'
  : 'http://localhost:3000/charges';

export default PAYMENT_SERVER_URL;
